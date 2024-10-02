import { Tile, TilesList } from '@types';
import { copyHaishi } from '../utils/copyHaishi';
import { removeTileToHaishi } from '../utils/removeTileToHand';

export const isKokushimusou13 = (
    haishi: TilesList,
    agariTile: Tile
): boolean => {
    const copiedHaishi = copyHaishi(haishi);
    removeTileToHaishi(copiedHaishi, agariTile);

    const isAllOneArray = (array: number[]): boolean => {
        return array.every((value) => value === 1);
    };

    return isAllOneArray(
        [
            copiedHaishi.m[1],
            copiedHaishi.m[9],
            copiedHaishi.p[1],
            copiedHaishi.p[9],
            copiedHaishi.s[1],
            copiedHaishi.s[9],
            ...copiedHaishi.z.slice(1, 8),
        ].filter((value) => value !== undefined)
    );
};
