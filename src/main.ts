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
): { name: string; point: number | string }[] => {
    const haishi = new Haishi(hand, agariTile, agariType);

    const yakuman = yakumanFinder(haishi, agariTile, agariType);
    if (yakuman?.length) {
        return yakuman;
    }

    const commonYaku = commonYakuFinder(haishi, grandBrow, playerBrow, isRichi);
    return commonYaku;
};

const hand = [
    { name: 'm1' },
    { name: 'm1' },
    { name: 'm2' },
    { name: 'm2' },
    { name: 'm3' },
    { name: 'm3' },
    { name: 'm4' },
    { name: 'm4' },
    { name: 'm9' },
    { name: 'm9' },
    { name: 'm6' },
    { name: 'm6' },
    { name: 'm7' },
];

const agariTile = { name: 'm7' };
const grandBrow = 'z1';
const playerBrow = 'z2';
const agariType = 'ロン';
const isRichi = false;

pointCalculator(hand, agariTile, grandBrow, playerBrow, agariType, isRichi);
