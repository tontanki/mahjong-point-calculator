import { Mentsu } from '@types*';

export const isToitoi = (mentsu: Mentsu[]): boolean => {
    return mentsu.every(
        (mentsu) => mentsu.type === '刻子' || mentsu.type === '対子'
    );
};
