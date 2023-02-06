function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false;
    }

    const sMap: Map<string, number> = countChars(s);

    const tMap: Map<string, number> = countChars(t);

    const entries: IterableIterator<[string, number]> = sMap.entries();

    let elem: [string, number] = entries.next().value;

    while (elem) {

        const [char, quantity] = elem;

        if (quantity !== tMap.get(char)) {
            return false;
        };

        elem = entries.next().value;

    }

    return true;

};

function countChars(str: string): Map<string, number> {

    const map: Map<string, number> = new Map<string, number>();

    str.split('').forEach(char => {

        let quantity: number = map.get(char) || 0;

        map.set(char, ++quantity);

    });

    return map;

};