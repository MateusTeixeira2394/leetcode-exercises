function generate(numRows: number): number[][] {

    if (numRows === 0) {
        return [];
    }

    let pascalsTriangle: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {

        let sons: number[] = [];

        let prev: number[] = pascalsTriangle[i - 1];

        for (let j = 0; j <= prev.length; j++) {

            let mom: number = prev[j-1] || 0;
            
            let dad: number = prev[j] || 0;
            
            sons[j] = mom + dad;

        }
        
        pascalsTriangle[i] = sons;

    }

    return pascalsTriangle;

};