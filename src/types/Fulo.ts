import { Tile } from './Tile';

export type Fulo = {
    tile: Tile[];
    type: 'minkantsu' | 'ankantsu' | 'pon';
    fuloPlace: 'shimotya' | 'kamitya' | 'toimen' | 'jitya';
};
