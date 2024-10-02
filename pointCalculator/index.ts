import { Tile, Fulo, TilesList } from '@types*';
import { addTileToHaishi } from './utils/addTileToHand';

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
    const haishi: TilesList = {
        m: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        p: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        s: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        z: [undefined, 0, 0, 0, 0, 0, 0, 0],
    };

    hand.forEach((tile) => {
        addTileToHaishi(haishi, tile);
    });

    addTileToHaishi(haishi, tsumo);
};
