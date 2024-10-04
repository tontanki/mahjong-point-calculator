import { Tile } from '@types*';
import { Haishi } from './haishi/Haishi';
import { yakumanFinder } from './yakuman';
import { commonYakuFinder } from './commonYaku';

export const pointCalculator = (
    hand: Tile[],
    agariTile: Tile,
    grandBrow: '東' | '南' | '西' | '北',
    playerBrow: '東' | '南' | '西' | '北',
    agariType: 'ツモ' | 'ロン',
    isRichi: boolean
): void => {
    const haishi = new Haishi(hand, agariTile, agariType);

    const yakuman = yakumanFinder(haishi, agariTile, agariType);
    if (yakuman?.length) {
        console.log(yakuman);
        // return;
    }

    const commonYaku = commonYakuFinder(haishi, agariTile, agariType);
    console.log(commonYaku);
};

const hand = [
    { name: 'm1' },
    { name: 'm1' },
    { name: 'm2' },
    { name: 'm2' },
    { name: 'm3' },
    { name: 'm3' },
    { name: 's1' },
    { name: 's1' },
    { name: 's1' },
    { name: 's9' },
    { name: 's9' },
    { name: 's9' },
    { name: 'p1' },
];

const agariTile = { name: 'p1' };
const grandBrow = '東';
const playerBrow = '東';
const agariType = 'ツモ';
const isRichi = false;

pointCalculator(hand, agariTile, grandBrow, playerBrow, agariType, isRichi);
