import { Tile, TileNumber, TileType, TilesList } from '@types';

export class Haishi {
    haishi: TilesList = {
        m: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        p: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        s: [undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        z: [undefined, 0, 0, 0, 0, 0, 0, 0],
    };
    totalTiles = 0;
    agariType: 'ツモ' | 'ロン' = 'ツモ';
    agariTile: Tile;
    constructor(hand: Tile[], agariTile: Tile, agariType: 'ツモ' | 'ロン') {
        hand.forEach((tile) => {
            this.addTile(tile);
        });
        this.addTile(agariTile);
        this.agariTile = agariTile;
        this.agariType = agariType;
    }

    addTile(tile: Tile): void {
        const tileType = tile.name[0] as TileType;
        const tileNumber = Number(tile.name[1]) as TileNumber;

        this.haishi[tileType][tileNumber]++;
        this.totalTiles++;
        this.validate();
    }

    removeTile(tile: Tile): void {
        const tileType = tile.name[0] as TileType;
        const tileNumber = Number(tile.name[1]) as TileNumber;

        this.haishi[tileType][tileNumber]--;
        this.totalTiles--;
        this.validate();
    }

    clone(): Haishi {
        const newHaishi = new Haishi([], this.agariTile, this.agariType);
        newHaishi.haishi = {
            m: [...this.haishi.m],
            p: [...this.haishi.p],
            s: [...this.haishi.s],
            z: [...this.haishi.z],
        };
        newHaishi.totalTiles = this.totalTiles;

        return newHaishi;
    }

    getYaochuhai(): number[] {
        const yaochuhai = [
            ...this.haishi.z,
            this.haishi.m[1],
            this.haishi.m[9],
            this.haishi.p[1],
            this.haishi.p[9],
            this.haishi.s[1],
            this.haishi.s[9],
        ].filter((tileNumber) => tileNumber !== undefined);

        return yaochuhai;
    }

    getTilesTypeList(key: TileType): string {
        const tiles = this.haishi[key].map((tileNumber) => {
            return tileNumber;
        });

        return tiles.join('');
    }

    getTileTypeLength(key: TileType): number {
        return this.haishi[key].filter((tileNumber) => tileNumber !== undefined)
            .length;
    }

    getTileCount(tile: Tile): number {
        const tileType = tile.name[0] as TileType;
        const tileNumber = Number(tile.name[1]) as TileNumber;

        const count = this.haishi[tileType][tileNumber];
        if (count === undefined) {
            throw new Error('指定された牌が存在しません');
        }
        return count;
    }

    countSpecificTiles(target: number): number {
        let count = 0;
        for (const key in this.haishi) {
            count += this.haishi[key].filter((tile) => tile === target).length;
        }
        return count;
    }

    validate(): boolean {
        if (this.totalTiles > 14) {
            throw new Error('手牌が14枚を超えています');
        }

        if (this.totalTiles < 0) {
            throw new Error('手牌が0枚を下回っています');
        }

        for (const key in this.haishi) {
            const tiles = this.haishi[key].filter((tileNumber) => {
                tileNumber !== undefined;
            });

            if (tiles.length > 4) {
                throw new Error('同じ牌が5枚以上あります');
            }

            if (tiles.length < 0) {
                throw new Error('同じ牌が0枚以下です');
            }
        }

        return true;
    }
}
