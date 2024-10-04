import { TileType, Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const determineHead = (
    haishi: Haishi,
    type: TileType,
    index: number
): Mentsu | undefined => {
    const tileCount = haishi.getTileCount({ name: `${type}${index}` });
    if (tileCount >= 2) {
        haishi.removeTile({ name: `${type}${index}` });
        haishi.removeTile({ name: `${type}${index}` });
        return {
            type: '対子',
            tiles: [{ name: `${type}${index}` }, { name: `${type}${index}` }],
        };
    }

    return undefined;
};
