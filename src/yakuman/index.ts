import { Tile, TilesList } from '@types';
import { isKokushimusou13 } from './kokushimusou';

export const yakumanFinder = (
    haishi: TilesList,
    agariTile: Tile,
    agariType: 'ツモ' | 'ロン'
): string => {
    if (isKokushimusou13(haishi, agariTile)) return 'kokushimusou13';

    return 'yakuman';
};
