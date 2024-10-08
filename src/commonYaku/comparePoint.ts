type Point = {
    name: string;
    point: number;
};

export const comparePoint = (a: Point[], b: Point[]): Point[] => {
    const aSumPoint = a.reduce((acc, cur) => acc + cur.point, 0);
    const bSumPoint = b.reduce((acc, cur) => acc + cur.point, 0);

    if (aSumPoint > bSumPoint) return a;
    else return b;
};
