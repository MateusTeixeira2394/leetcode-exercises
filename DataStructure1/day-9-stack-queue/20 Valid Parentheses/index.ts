function isValid(s: string): boolean {

    let stack: string[] = [];

    let splitted: string[] = s.split('');

    for (let i = 0; i < splitted.length; i++) {

        let char: string = splitted[i];

        if (char === '(') {

            stack.push(')');

        };

        if (char === '[') {

            stack.push(']');

        };

        if (char === '{') {

            stack.push('}');

        };

        if (
            char === ')' ||
            char === ']' ||
            char === '}'
        ) {

            if (!isCloseBracketValid(char, stack)) return false;

        };

    };

    return stack.length === 0;

};

function isCloseBracketValid(char: string, stack: string[]): boolean {

    return stack.pop() === char;

};