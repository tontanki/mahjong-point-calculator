import { Tile, TilesList } from '@types';

export const addTileToHaishi = (haishi: TilesList, addTile: Tile): void => {
    const tileType = addTile.name[0] as 'm' | 'p' | 's' | 'z';
    const tileNumber = Number(addTile.name[1]) as
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9;

    haishi[tileType][tileNumber]++;
};
