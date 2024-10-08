import { TileType, Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { determineHead } from './determineHead';
import { convertMentsuFromHand } from './convertMentsuFromHand';
import { commonYakuCalculator } from './commonYakuCalculator';
import { Brow } from 'src/types/Brow';

export const commonYakuFinder = (
    haishi: Haishi,
    grandBrow: Brow,
    playerBrow: Brow,
    isRichi: boolean
): string[] => {
    const result: string[] = [];
    const types: TileType[] = ['m', 'p', 's', 'z'];

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
                const test = commonYakuCalculator(
                    haishi,
                    shuntsuFirst,
                    grandBrow,
                    playerBrow,
                    isRichi
                );
                console.log('shuntsuFirst : ', test);
            }
            if (koutsuFirst !== undefined) {
                const test = commonYakuCalculator(
                    haishi,
                    koutsuFirst,
                    grandBrow,
                    playerBrow,
                    isRichi
                );
                console.log('koutsuFirst : ', test);
            }
        }
    }

    return result;
};
