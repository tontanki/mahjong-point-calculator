import { Tile } from '@types*';
import { Haishi } from './haishi/Haishi';
import { yakumanFinder } from './yakuman';
import { commonYakuFinder } from './commonYaku';
import { Brow } from './types/Brow';

export const pointCalculator = (
    hand: Tile[],
    agariTile: Tile,
    grandBrow: Brow,
    playerBrow: Brow,
    agariType: 'ツモ' | 'ロン',
    isRichi: boolean
): void => {
    const haishi = new Haishi(hand, agariTile, agariType);

    const yakuman = yakumanFinder(haishi, agariTile, agariType);
    if (yakuman?.length) {
        console.log(yakuman);
        // return;
    }

    const commonYaku = commonYakuFinder(haishi, grandBrow, playerBrow, isRichi);
    console.log(commonYaku);
};

const hand = [
    { name: 'm1' },
    { name: 'm2' },
    { name: 'm3' },
    { name: 's1' },
    { name: 's2' },
    { name: 's3' },
    { name: 'z2' },
    { name: 'z2' },
    { name: 'z2' },
    { name: 'z4' },
    { name: 'z4' },
    { name: 's1' },
    { name: 's1' },
];

const agariTile = { name: 's1' };
const grandBrow = '東';
const playerBrow = '東';
const agariType = 'ツモ';
const isRichi = false;

pointCalculator(hand, agariTile, grandBrow, playerBrow, agariType, isRichi);
