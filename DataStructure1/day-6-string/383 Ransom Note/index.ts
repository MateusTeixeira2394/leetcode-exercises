function canConstruct(ransomNote: string, magazine: string): boolean {

    let ransomNoteMap: Map<string, number> = countLetters(ransomNote);
    let magazineMap: Map<string, number> = countLetters(magazine);

    let entries: IterableIterator<[string, number]> = ransomNoteMap.entries();

    let elem: [string, number] | undefined = entries.next().value;

    while (elem) {

        const [letter, quantity] = elem;

        const magazineLetterQtd: number | undefined = magazineMap.get(letter);

        if (
            !magazineLetterQtd ||
            magazineLetterQtd < quantity
        ) {
            return false;
        }

        elem = entries.next().value;

    }

    return true;

};

function countLetters(str: string): Map<string, number> {

    let map: Map<string, number> = new Map<string, number>();

    str.split('').forEach(letter => {

        let quantity: number = map.get(letter) || 0;

        map.set(letter, ++quantity);

    });

    return map;

}