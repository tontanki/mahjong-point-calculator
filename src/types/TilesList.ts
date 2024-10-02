export type TilesList = {
    m: [
        undefined,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    p: [
        undefined,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    s: [
        undefined,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    z: [undefined, number, number, number, number, number, number, number];
    [key: string]: [undefined, ...number[]];
};
