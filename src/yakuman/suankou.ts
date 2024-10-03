import { Tile } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isSuankoutanki = (haishi: Haishi, agariType: Tile): boolean => {
    const clonedHaishi = haishi.clone();
    if (
        clonedHaishi.countSpecificTiles(3) === 4 &&
        clonedHaishi.countSpecificTiles(2) === 1
    ) {
        clonedHaishi.removeTile(agariType);
        return clonedHaishi.countSpecificTiles(1) === 1;
    }
    return false;
};

export const isSuankou = (
    haishi: Haishi,
    agariType: 'ツモ' | 'ロン'
): boolean => {
    if (agariType === 'ロン') return false;
    return (
        haishi.countSpecificTiles(3) === 4 && haishi.countSpecificTiles(2) === 1
    );
};
