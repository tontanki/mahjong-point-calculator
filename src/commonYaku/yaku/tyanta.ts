import { Mentsu } from '@types*';

export const isTyanta = (mentsu: Mentsu[]): boolean => {
    return mentsu.every((mentsu) => {
        return mentsu.tiles.some(
            (tile) =>
                tile.name[1] === '1' ||
                tile.name[1] === '9' ||
                tile.name[0] === 'z'
        );
    });
};
