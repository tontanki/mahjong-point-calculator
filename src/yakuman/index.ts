import { Tile } from '@types';
import { isKokushimusou, isKokushimusou13 } from './kokushimusou';
import { Haishi } from 'src/haishi/Haishi';
import { isChuren, isJunseichuren } from './churen';

export const yakumanFinder = (
    haishi: Haishi,
    agariTile: Tile,
    agariType: 'ツモ' | 'ロン'
): { name: string; point: string | number } | undefined => {
    if (isKokushimusou13(haishi, agariTile))
        return { name: '国士無双13面待ち', point: 'yy' };
    if (isKokushimusou(haishi)) return { name: '国士無双', point: 'y' };
    if (isJunseichuren(haishi, agariTile))
        return { name: '純正九蓮宝燈', point: 'yy' };
    if (isChuren(haishi, agariTile)) return { name: '九蓮宝燈', point: 'y' };

    return;
};
