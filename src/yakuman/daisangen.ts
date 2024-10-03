import { Haishi } from 'src/haishi/Haishi';

export const isDaisangen = (haishi: Haishi): boolean => {
    const regex = /333$/;
    const zTiles = haishi.getTilesTypeList('z');
    return regex.test(zTiles);
};
