import { Tile } from '@types';
import { isKokushimusou, isKokushimusou13 } from './kokushimusou';
import { Haishi } from 'src/haishi/Haishi';
import { isChuren, isJunseichuren } from './churen';
import { isSuankou, isSuankoutanki } from './suankou';
import { isDaisangen } from './daisangen';
import { isTsuiso } from './tsuiso';
import { isRyuiso } from './ryuiso';

export const yakumanFinder = (
    haishi: Haishi,
    agariTile: Tile,
    agariType: 'ツモ' | 'ロン'
): { name: string; point: string | number }[] | undefined => {
    //単独役満
    if (isKokushimusou13(haishi, agariTile))
        return [{ name: '国士無双13面待ち', point: 'yy' }];
    if (isKokushimusou(haishi)) return [{ name: '国士無双', point: 'y' }];
    if (isJunseichuren(haishi, agariTile))
        return [{ name: '純正九蓮宝燈', point: 'yy' }];
    if (isChuren(haishi)) return [{ name: '九蓮宝燈', point: 'y' }];

    //複合役満
    const result = [];
    if (isSuankoutanki(haishi, agariTile))
        result.push({ name: '四暗刻単騎', point: 'yy' });
    else if (isSuankou(haishi, agariType))
        result.push({ name: '四暗刻', point: 'y' });
    if (isDaisangen(haishi)) result.push({ name: '大三元', point: 'y' });
    if (isTsuiso(haishi)) result.push({ name: '字一色', point: 'y' });
    if (isRyuiso(haishi)) result.push({ name: '緑一色', point: 'y' });

    return result.length > 0 ? result : undefined;
};
