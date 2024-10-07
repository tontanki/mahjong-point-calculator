import { Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { Brow } from 'src/types/Brow';
import { isJuntyan } from './yaku/juntyan';
import { isChinitsu } from './yaku/chinitsu';
import { isYakuhai } from './yaku/yakuhai';
import { isSyosangen } from './yaku/syosangen';

export const commonYakuCalculator = (
    haishi: Haishi,
    mentsu: Mentsu[],
    grandBrow: Brow,
    playerBrow: Brow,
    isRichi: boolean
) => {
    const result: { name: string; point: number }[] = [];

    if (isRichi) result.push({ name: '立直', point: 1 });
    if (haishi.getAgariType() === 'ツモ')
        result.push({ name: '門前清自摸和', point: 1 });

    // 字牌の有無
    if (haishi.getTileTypeSum('z') === 0) {
        if (isChinitsu(haishi)) result.push({ name: '清一色', point: 6 });
        if (isJuntyan(mentsu)) result.push({ name: '純全帯幺九', point: 3 });
    } else {
        result.push(...isYakuhai(haishi, grandBrow, playerBrow));
        if (isSyosangen(haishi)) result.push({ name: '小三元', point: 2 });
    }

    return result;
};
