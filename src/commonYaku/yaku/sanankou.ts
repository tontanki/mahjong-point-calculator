import { Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const isSanankou = (mentsu: Mentsu[], haishi: Haishi): boolean => {
    if (mentsu.filter((mentsu) => mentsu.type === '刻子').length < 3)
        return false;
    if (haishi.getAgariType() === 'ツモ') return true;
    if (mentsu.filter((mentsu) => mentsu.type === '順子').length === 0)
        return true;

    const koutsuMentsu = mentsu.filter((mentsu) => mentsu.type === '刻子');
    const shuntsuMentsu = mentsu.filter((mentsu) => mentsu.type === '順子');

    if (
        koutsuMentsu.some(
            (mentsu) => mentsu.tiles[0].name === haishi.agariTile.name
        )
    ) {
        if (
            shuntsuMentsu.some((mentsu) => {
                for (let i = 0; i < 3; i++) {
                    if (mentsu.tiles[i].name === haishi.agariTile.name)
                        return true;
                }
            })
        )
            return true;
        else return false;
    } else return true;
};
