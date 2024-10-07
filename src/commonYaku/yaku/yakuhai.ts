import { Haishi } from 'src/haishi/Haishi';
import { Brow } from 'src/types/Brow';

export const isYakuhai = (
    haishi: Haishi,
    grandBrow: Brow,
    playerBrow: Brow
): { name: string; point: number }[] => {
    const result = [];

    if (haishi.getTileCount({ name: 'z1' }) === 3) {
        if (grandBrow === '東') result.push({ name: '場風牌', point: 1 });
        if (playerBrow === '東') result.push({ name: '自風牌', point: 1 });
    }
    if (haishi.getTileCount({ name: 'z2' }) === 3) {
        if (grandBrow === '南') result.push({ name: '場風牌', point: 1 });
        if (playerBrow === '南') result.push({ name: '自風牌', point: 1 });
    }
    if (haishi.getTileCount({ name: 'z3' }) === 3) {
        if (grandBrow === '西') result.push({ name: '場風牌', point: 1 });
        if (playerBrow === '西') result.push({ name: '自風牌', point: 1 });
    }

    if (haishi.getTileCount({ name: 'z5' }) === 3) {
        result.push({ name: '白', point: 1 });
    }

    if (haishi.getTileCount({ name: 'z6' }) === 3) {
        result.push({ name: '發', point: 1 });
    }

    if (haishi.getTileCount({ name: 'z7' }) === 3) {
        result.push({ name: '中', point: 1 });
    }

    return result;
};
