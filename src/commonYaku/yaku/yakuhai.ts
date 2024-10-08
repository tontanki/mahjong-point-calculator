import { Haishi } from 'src/haishi/Haishi';
import { Brow } from 'src/types/Brow';

export const isYakuhai = (
    haishi: Haishi,
    grandBrow: Brow,
    playerBrow: Brow
): { name: string; point: number }[] => {
    const result = [];

    if (haishi.getTileCount({ name: grandBrow }) === 3) {
        result.push({ name: '場風牌', point: 1 });
    }

    if (haishi.getTileCount({ name: playerBrow }) === 3) {
        result.push({ name: '自風牌', point: 1 });
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
