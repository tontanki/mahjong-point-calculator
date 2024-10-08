import { Haishi } from 'src/haishi/Haishi';

export const isTanyao = (haishi: Haishi): boolean => {
    return haishi.getYaochuhai().every((tile) => tile === 0);
};
