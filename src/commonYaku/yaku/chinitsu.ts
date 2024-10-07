import { TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isChinitsu = (haishi: Haishi): boolean => {
    const tileTypes: TileType[] = ['m', 'p', 's'];
    return tileTypes.some((type) => haishi.getTileTypeSum(type) === 14);
};
