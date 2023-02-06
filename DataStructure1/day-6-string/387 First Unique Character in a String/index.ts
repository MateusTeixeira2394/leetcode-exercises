function firstUniqChar(s: string): number {

    let repeatingsMap: Map<string, number> = new Map<string, number>();
    let indexesMap: Map<string, number> = new Map<string, number>();

    s.split('').forEach((char, index) => {

        let times: number = repeatingsMap.get(char) || 0;

        repeatingsMap.set(char, times + 1);
        indexesMap.set(char, index);

    });

    let entries: IterableIterator<[string, number]> = repeatingsMap.entries();

    let elem: [string, number] | undefined = entries.next().value

    while (elem) {

        const [char, times] = elem;

        if (times === 1) {
            return indexesMap.get(char) || -1;
        }

        elem = entries.next().value;

    }

    return -1;

};