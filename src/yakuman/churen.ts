import { Tile } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isJunseichuren = (haishi: Haishi, agariTile: Tile): boolean => {
    const clonedHaishi = haishi.clone();
    clonedHaishi.removeTile(agariTile);

    const m = clonedHaishi.getTilesTypeList('m');
    if (m === '311111113') return true;
    const p = clonedHaishi.getTilesTypeList('p');
    if (p === '311111113') return true;
    const s = clonedHaishi.getTilesTypeList('s');
    if (s === '311111113') return true;

    return false;
};

export const isChuren = (haishi: Haishi, agariTile: Tile): boolean => {
    const regex = /^3[12]{7}3$/;
    const clonedHaishi = haishi.clone();

    const m = clonedHaishi.getTilesTypeList('m');
    if (regex.test(m)) return true;
    const p = clonedHaishi.getTilesTypeList('p');
    if (regex.test(p)) return true;
    const s = clonedHaishi.getTilesTypeList('s');
    if (regex.test(s)) return true;
    return false;
};
