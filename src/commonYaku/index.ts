import { Tile, TileType, Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { determineHead } from './determineHead';

export const commonYakuFinder = (
    haishi: Haishi,
    agariTile: Tile,
    agariType: 'ツモ' | 'ロン'
): string[] => {
    const result: string[] = [];
    const types: TileType[] = ['m', 'p', 's', 'z'];

    for (let i = 0; i < types.length; i++) {
        const key = types[i];
        for (let j = 1; j <= haishi.getTileTypeLength(key); j++) {
            const clonedHaishi = haishi.clone();
            const mentsu: Mentsu[] = [];
            const head = determineHead(clonedHaishi, key, j);
            if (head === undefined) continue;

            console.log(head);
        }
    }

    return result;
};
