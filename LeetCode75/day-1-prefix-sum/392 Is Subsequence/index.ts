function isSubsequence(s: string, t: string): boolean {

    let sIndex: number = 0;
    let tIndex: number = 0;
    let subsequence: string = '';

    while(
        sIndex < s.length &&
        tIndex < t.length
    ){

        if(t[tIndex] === s[sIndex]){
            subsequence=subsequence+s[sIndex];
            sIndex++;
            tIndex++;
        } else {
            tIndex++;
        }

    }

    return subsequence === s;

};