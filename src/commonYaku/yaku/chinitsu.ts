import { TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isChinitsu = (haishi: Haishi): boolean => {
    const tileTypes: TileType[] = ['m', 'p', 's'];
    tileTypes.forEach((type) => {
        if (haishi.getTileTypeSum(type) === 14) return true;
    });

    return false;
};
