function isIsomorphic(s: string, t: string): boolean {

    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {

        if (mapS[s[i]] === undefined) {
            mapS[s[i]] = t[i];
        }

        if (mapT[t[i]] === undefined) {
            mapT[t[i]] = s[i];
        }

        if (
            mapS[s[i]] !== t[i] ||
            mapT[t[i]] !== s[i]
        ) {
            return false;
        }

    }

    return true;

};
