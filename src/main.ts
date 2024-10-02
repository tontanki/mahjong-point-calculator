import { Tile, Fulo } from '@types*';
import { Haishi } from './haishi/Haishi';

export const pointCalculator = (
    hand: Tile[],
    tsumo: Tile,
    agariTile: Tile,
    fulo: Fulo[],
    grandBrow: '東' | '南' | '西' | '北',
    playerBrow: '東' | '南' | '西' | '北',
    agariType: 'ツモ' | 'ロン',
    isRichi: boolean
): void => {
    const haishi = new Haishi();

    hand.forEach((tile) => {
        haishi.addTile(tile);
    });

    haishi.addTile(tsumo);
};
