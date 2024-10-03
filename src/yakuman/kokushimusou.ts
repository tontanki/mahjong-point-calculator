import { Tile } from '@types';
import { Haishi } from 'src/haishi/Haishi';

export const isKokushimusou13 = (haishi: Haishi, agariTile: Tile): boolean => {
    const clonedHaishi = haishi.clone();
    clonedHaishi.removeTile(agariTile);

    const yaochuhai = clonedHaishi.getYaochuhai();

    console.log('clonedHaishi : ', clonedHaishi);
    console.log('yaochuhai : ', yaochuhai);

    return yaochuhai.every((tileNumber) => tileNumber === 1);
};
