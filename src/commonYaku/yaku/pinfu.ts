import { Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { Brow } from 'src/types/Brow';

export const isPinfu = (
    mentsu: Mentsu[],
    haishi: Haishi,
    grandBrow: Brow,
    playerBrow: Brow
): boolean => {
    const shuntsuMentsu = mentsu.filter((mentsu) => mentsu.type === '順子');

    if (shuntsuMentsu.length !== 4) return false;

    const toitsu = mentsu.filter((mentsu) => mentsu.type === '対子')[0];

    if (toitsu.tiles[0].name === grandBrow) return false;
    if (toitsu.tiles[0].name === playerBrow) return false;
    if (toitsu.tiles[0].name === 'z5') return false;
    if (toitsu.tiles[0].name === 'z6') return false;
    if (toitsu.tiles[0].name === 'z7') return false;

    return shuntsuMentsu.some((mentsu) => {
        if (haishi.agariTile.name === mentsu.tiles[0].name) return true;
        if (haishi.agariTile.name === mentsu.tiles[2].name) return true;
    });
};
