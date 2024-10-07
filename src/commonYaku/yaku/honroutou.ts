import { Haishi } from 'src/haishi/Haishi';

export const isHonroutou = (haishi: Haishi): boolean => {
    const sum =
        haishi.getTileCount({ name: 'm1' }) +
        haishi.getTileCount({ name: 'm9' }) +
        haishi.getTileCount({ name: 'p1' }) +
        haishi.getTileCount({ name: 'p9' }) +
        haishi.getTileCount({ name: 's1' }) +
        haishi.getTileCount({ name: 's9' }) +
        haishi.getTileTypeSum('z');

    return sum === 14;
};
