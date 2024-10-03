import { Haishi } from 'src/haishi/Haishi';

export const isDaisushi = (haishi: Haishi): boolean => {
    const sum = [
        haishi.getTileCount({ name: 'z1' }),
        haishi.getTileCount({ name: 'z2' }),
        haishi.getTileCount({ name: 'z3' }),
        haishi.getTileCount({ name: 'z4' }),
    ].reduce((acc, cur) => acc + cur, 0);

    return sum === 12;
};

export const isSyosushi = (haishi: Haishi): boolean => {
    const sum = [
        haishi.getTileCount({ name: 'z1' }),
        haishi.getTileCount({ name: 'z2' }),
        haishi.getTileCount({ name: 'z3' }),
        haishi.getTileCount({ name: 'z4' }),
    ].reduce((acc, cur) => acc + cur, 0);

    return sum === 11;
};
