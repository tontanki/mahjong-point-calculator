import { Mentsu } from '@types*';

export const isSansyokudoukoku = (mentsu: Mentsu[]): boolean => {
    const koutsuMentsu = mentsu.filter(
        (mentsu) => mentsu.type === '刻子' && mentsu.tiles[0].name[0] !== 'z'
    );

    if (koutsuMentsu.length < 3) return false;

    const manzuGroup = koutsuMentsu.filter(
        (mentsu) => mentsu.tiles[0].name[0] === 'm'
    );
    if (manzuGroup.length < 1) return false;
    const pinzuGroup = koutsuMentsu.filter(
        (mentsu) => mentsu.tiles[0].name[0] === 'p'
    );
    if (pinzuGroup.length < 1) return false;
    const souzuGroup = koutsuMentsu.filter(
        (mentsu) => mentsu.tiles[0].name[0] === 's'
    );
    if (souzuGroup.length < 1) return false;

    return manzuGroup.some((manzuGroup) => {
        return pinzuGroup.some((pinzuGroup) => {
            return souzuGroup.some((souzuGroup) => {
                return (
                    manzuGroup.tiles[0].name[1] ===
                        pinzuGroup.tiles[0].name[1] &&
                    pinzuGroup.tiles[0].name[1] === souzuGroup.tiles[0].name[1]
                );
            });
        });
    });
};
