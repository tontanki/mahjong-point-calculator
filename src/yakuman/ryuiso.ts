import { Haishi } from 'src/haishi/Haishi';

export const isRyuiso = (haishi: Haishi): boolean => {
    const sum = [
        haishi.getTileCount({ name: 's2' }),
        haishi.getTileCount({ name: 's3' }),
        haishi.getTileCount({ name: 's4' }),
        haishi.getTileCount({ name: 's6' }),
        haishi.getTileCount({ name: 's8' }),
        haishi.getTileCount({ name: 'z6' }),
    ].reduce((acc, cur) => acc + cur, 0);

    return sum === 14;
};
