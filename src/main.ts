import { Tile, Fulo } from '@types*';
import { Haishi } from './haishi/Haishi';
import { yakumanFinder } from './yakuman';

export const pointCalculator = (
    hand: Tile[],
    agariTile: Tile,
    fulo: Fulo[] | null,
    grandBrow: '東' | '南' | '西' | '北',
    playerBrow: '東' | '南' | '西' | '北',
    agariType: 'ツモ' | 'ロン',
    isRichi: boolean
): void => {
    const haishi = new Haishi();

    hand.forEach((tile) => {
        haishi.addTile(tile);
    });

    haishi.addTile(agariTile);

    console.log(
        'yakumanFinder : ',
        yakumanFinder(haishi, agariTile, agariType)
    );
};

const hand = [
    { name: 'm1' },
    { name: 'm1' },
    { name: 'm1' },
    { name: 'm2' },
    { name: 'z5' },
    { name: 'z5' },
    { name: 'z5' },
    { name: 'z6' },
    { name: 'z6' },
    { name: 'z6' },
    { name: 'z7' },
    { name: 'z7' },
    { name: 'z7' },
];

const agariTile = { name: 'm2' };
const fulo = null;
const grandBrow = '東';
const playerBrow = '東';
const agariType = 'ツモ';
const isRichi = false;

pointCalculator(
    hand,
    agariTile,
    fulo,
    grandBrow,
    playerBrow,
    agariType,
    isRichi
);
