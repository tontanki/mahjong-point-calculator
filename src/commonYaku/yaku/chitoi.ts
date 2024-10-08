import { Mentsu, TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

export const createChitoitsu = (haishi: Haishi): Mentsu[] | undefined => {
    if (haishi.countSpecificTiles(2) !== 7) {
        return undefined;
    }

    const chitoitsu: Mentsu[] = [];
    const types: TileType[] = ['m', 'p', 's', 'z'];

    for (let i = 0; i < types.length; i++) {
        const key = types[i];
        for (let j = 1; j <= haishi.getTileTypeLength(key); j++) {
            const tileCount = haishi.getTileCount({ name: `${key}${j}` });
            if (tileCount === 2) {
                chitoitsu.push({
                    type: '対子',
                    tiles: [{ name: `${key}${j}` }, { name: `${key}${j}` }],
                });
            }
        }
    }

    return chitoitsu;
};
