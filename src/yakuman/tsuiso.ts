import { Haishi } from 'src/haishi/Haishi';

export const isTsuiso = (haishi: Haishi): boolean => {
    const z = haishi.getTilesTypeList('z');
    const sum = z
        .split('') // 文字列を配列に変換
        .map((char) => parseInt(char, 10)) // 各要素を数値に変換
        .reduce((acc, cur) => acc + cur, 0); // 合計の計算
    return sum === 14;
};
