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
    { name: 'm4' },
    { name: 'm5' },
    { name: 'm6' },
    { name: 'm7' },
    { name: 'm8' },
    { name: 'm9' },
    { name: 's8' },
    { name: 's8' },
    { name: 'p2' },
    { name: 'p2' },
];

const agariTile = { name: 's8' };
const grandBrow = 'z1';
const playerBrow = 'z2';
const agariType = 'ロン';
const isRichi = false;

pointCalculator(hand, agariTile, grandBrow, playerBrow, agariType, isRichi);
