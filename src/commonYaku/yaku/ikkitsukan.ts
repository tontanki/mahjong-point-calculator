import { Mentsu, Tile, TileType } from '@types*';

export const isIkkitsukan = (mentsu: Mentsu[]): boolean => {
    const shuntsuMentsu = mentsu.filter((mentsu) => mentsu.type === '順子');
    if (shuntsuMentsu.length < 3) return false;

    const types: TileType[] = ['m', 'p', 's'];
    const sequence: string[][] = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
    ];

    return types.some((type) => {
        return sequence.every((seq) => {
            return shuntsuMentsu.some((mentsu) => {
                return (
                    mentsu.tiles[0].name === `${type}${seq[0]}` &&
                    mentsu.tiles[1].name === `${type}${seq[1]}` &&
                    mentsu.tiles[2].name === `${type}${seq[2]}`
                );
            });
        });
    });
};
