import { Mentsu, TileType } from '@types*';
import { Haishi } from 'src/haishi/Haishi';

const determineShuntsu = (haishi: Haishi): Mentsu[] => {
    const types: TileType[] = ['m', 'p', 's'];
    const mentsu: Mentsu[] = [];
    for (let i = 0; i < types.length; i++) {
        const key = types[i];
        for (let j = 1; j <= 7; j++) {
            const tile1 = { name: `${key}${j}` };
            const tile2 = { name: `${key}${j + 1}` };
            const tile3 = { name: `${key}${j + 2}` };
            const min = Math.min(
                haishi.getTileCount(tile1),
                haishi.getTileCount(tile2),
                haishi.getTileCount(tile3)
            );
            if (min === 1) continue;
            for (let k = 0; k < min; k++) {
                haishi.removeTile(tile1);
                haishi.removeTile(tile2);
                haishi.removeTile(tile3);
                mentsu.push({
                    type: '順子',
                    tiles: [tile1, tile2, tile3],
                });
            }
        }
    }
    return mentsu;
};

const determineKoutsu = (haishi: Haishi): Mentsu[] => {
    const types: TileType[] = ['m', 'p', 's', 'z'];
    const mentsu: Mentsu[] = [];
    for (let i = 0; i < types.length; i++) {
        const key = types[i];
        for (let j = 1; j <= haishi.getTileTypeLength(key); j++) {
            const tile = { name: `${key}${j}` };
            const count = haishi.getTileCount(tile);
            if (count >= 3) {
                for (let k = 0; k < count; k++) {
                    haishi.removeTile(tile);
                }
                mentsu.push({
                    type: '刻子',
                    tiles: [tile, tile, tile],
                });
            }
        }
    }
    return mentsu;
};

export const convertMentsuFromHand = (
    haishi: Haishi
): {
    shuntsuFirst: Mentsu[] | undefined;
    koutsuFirst: Mentsu[] | undefined;
} => {
    const shuntsuFirst = () => {
        const clonedHaishi = haishi.clone();
        const shuntsu = determineShuntsu(clonedHaishi);
        const koutsu = determineKoutsu(clonedHaishi);
        if (shuntsu.length + koutsu.length !== 4) return undefined;
        return [...shuntsu, ...koutsu];
    };

    const koutsuFirst = () => {
        const clonedHaishi = haishi.clone();
        const koutsu = determineKoutsu(clonedHaishi);
        const shuntsu = determineShuntsu(clonedHaishi);
        if (shuntsu.length + koutsu.length !== 4) return undefined;
        return [...koutsu, ...shuntsu];
    };

    return { shuntsuFirst: shuntsuFirst(), koutsuFirst: koutsuFirst() };
};
