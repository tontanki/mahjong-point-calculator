import { Mentsu, TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { Brow } from 'src/types/Brow';
import { isJuntyan } from './yaku/juntyan';

export const commonYakuCalculator = (
    haishi: Haishi,
    mentsu: Mentsu[],
    grandBrow: Brow,
    playerBrow: Brow,
    isRichi: boolean
) => {
    const result: { name: string; point: number }[] = [];

    if (isRichi) {
        result.push({ name: '立直', point: 1 });
    }

    // 字牌の有無
    if (haishi.getTileTypeSum('z') === 0) {
        const tileTypes: TileType[] = ['m', 'p', 's'];
        tileTypes.forEach((type) => {
            if (haishi.getTileTypeSum(type) === 14)
                result.push({ name: '清一色', point: 6 });
        });
        if (isJuntyan(mentsu)) result.push({ name: '純全帯幺九', point: 3 });
    }

    return result;
};
