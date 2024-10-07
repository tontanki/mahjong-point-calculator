import { Haishi } from 'src/haishi/Haishi';

export const isSyosangen = (haishi: Haishi): boolean => {
    const sum =
        haishi.getTileCount({ name: 'z5' }) +
        haishi.getTileCount({ name: 'z6' }) +
        haishi.getTileCount({ name: 'z7' });

    return sum === 8;
};
