import { Mentsu } from '@types*';

const arraysEqual = (a: Mentsu, b: Mentsu): boolean => {
    for (let i = 0; i < 3; i++) {
        if (a.tiles[i].name === b.tiles[i].name) return true;
    }
    return false;
};

export const isIpeko = (mentsu: Mentsu[]): boolean => {
    const shuntsuMentsu = mentsu.filter((mentsu) => mentsu.type === '順子');

    while (shuntsuMentsu.length > 1) {
        const mentsu = shuntsuMentsu.splice(0, 1)[0];
        if (shuntsuMentsu.some((target) => arraysEqual(target, mentsu)))
            return true;
    }
    return false;
};
