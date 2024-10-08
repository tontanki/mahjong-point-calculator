import { TileType, Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { determineHead } from './determineHead';
import { convertMentsuFromHand } from './convertMentsuFromHand';
import { commonYakuCalculator } from './commonYakuCalculator';
import { Brow } from 'src/types/Brow';
import { comparePoint } from './comparePoint';
import { createChitoitsu } from './yaku/chitoi';

export const commonYakuFinder = (
    haishi: Haishi,
    grandBrow: Brow,
    playerBrow: Brow,
    isRichi: boolean
): { name: string; point: number }[] => {
    const types: TileType[] = ['m', 'p', 's', 'z'];
    let maxPoint = [{ name: '', point: 0 }];

    for (let i = 0; i < types.length; i++) {
        const key = types[i];
        for (let j = 1; j <= haishi.getTileTypeLength(key); j++) {
            const clonedHaishi = haishi.clone();

            // 雀頭の設定
            const head = determineHead(clonedHaishi, key, j);
            if (head === undefined) continue;

            const { shuntsuFirst, koutsuFirst } =
                convertMentsuFromHand(clonedHaishi);

            shuntsuFirst?.unshift(head);
            koutsuFirst?.unshift(head);

            if (shuntsuFirst !== undefined) {
                const result = commonYakuCalculator(
                    haishi,
                    shuntsuFirst,
                    grandBrow,
                    playerBrow,
                    isRichi
                );
                maxPoint = comparePoint(maxPoint, result);
            }
            if (koutsuFirst !== undefined) {
                const result = commonYakuCalculator(
                    haishi,
                    koutsuFirst,
                    grandBrow,
                    playerBrow,
                    isRichi
                );
                maxPoint = comparePoint(maxPoint, result);
            }
        }
    }

    const mentsu: Mentsu[] | undefined = createChitoitsu(haishi);
    if (mentsu === undefined) return maxPoint;
    const result = commonYakuCalculator(
        haishi,
        mentsu,
        grandBrow,
        playerBrow,
        isRichi
    );

    result.push({ name: '七対子', point: 2 });

    maxPoint = comparePoint(maxPoint, result);

    return maxPoint;
};
