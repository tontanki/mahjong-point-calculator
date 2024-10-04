import { Tile, TileType, Mentsu } from '@types*';
import { Haishi } from 'src/haishi/Haishi';
import { determineHead } from './determineHead';
import { convertMentsuFromHand } from './convertMentsuFromHand';

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

            // 雀頭の設定
            const head = determineHead(clonedHaishi, key, j);
            if (head === undefined) continue;
            mentsu.push(head);

            console.log('haishi before : ', clonedHaishi);
            const { shuntsuFirst, koutsuFirst } =
                convertMentsuFromHand(clonedHaishi);

            if (shuntsuFirst !== undefined) {
                console.log(
                    'shuntsuFirst : ',
                    JSON.stringify(shuntsuFirst, null, 2)
                );
            }
            if (koutsuFirst !== undefined) {
                console.log(
                    'koutsuFirst : ',
                    JSON.stringify(koutsuFirst, null, 2)
                );
            }
        }
    }

    return result;
};
