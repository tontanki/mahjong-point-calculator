import { Tile } from '@types';
import { isKokushimusou13 } from './kokushimusou';
import { Haishi } from 'src/haishi/Haishi';

export const yakumanFinder = (
    haishi: Haishi,
    agariTile: Tile,
    agariType: 'ツモ' | 'ロン'
): string => {
    if (isKokushimusou13(haishi, agariTile)) return 'kokushimusou13';

    return 'not find';
};
