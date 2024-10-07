import { TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isHonitsu = (haishi: Haishi): boolean => {
    const tileTYpes: TileType[] = ['m', 'p', 's'];
    const zTileCount = haishi.getTileTypeSum('z');
    if (zTileCount === 0) return false;
    return tileTYpes.some((type) => {
        return zTileCount + haishi.getTileTypeSum(type) === 14;
    });
};
