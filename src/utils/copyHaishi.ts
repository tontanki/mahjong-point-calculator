import { TilesList } from '@types*';

export const copyHaishi = (haishi: TilesList): TilesList => {
    return {
        m: [...haishi.m],
        p: [...haishi.p],
        s: [...haishi.s],
        z: [...haishi.z],
    };
};
