import { Tile } from '@types';
import { Haishi } from 'src/haishi/Haishi';

export const isKokushimusou13 = (haishi: Haishi, agariTile: Tile): boolean => {
    const clonedHaishi = haishi.clone();
    clonedHaishi.removeTile(agariTile);
    const yaochuhai = clonedHaishi.getYaochuhai();

    return yaochuhai.every((tileNumber) => tileNumber === 1);
};

export const isKokushimusou = (haishi: Haishi): boolean => {
    const clonedHaishi = haishi.clone();
    const yaochuhai = clonedHaishi.getYaochuhai();

    return yaochuhai.every((tileNumber) => tileNumber >= 1);
};
