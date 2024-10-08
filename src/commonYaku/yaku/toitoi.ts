import { Mentsu } from '@types*';

export const isToitoi = (mentsu: Mentsu[]): boolean => {
    const koutsuMentsu = mentsu.filter((mentsu) => mentsu.type === '刻子');
    return koutsuMentsu.length === 4;
};
