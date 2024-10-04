import { Tile } from './Tile';

export type Mentsu = {
    type: '順子' | '刻子' | '対子';
    tiles: Tile[];
};
