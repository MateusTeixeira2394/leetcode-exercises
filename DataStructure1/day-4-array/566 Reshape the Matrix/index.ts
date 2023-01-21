function matrixReshape(mat: number[][], r: number, c: number): number[][] {

    let rows: number = mat.length;
    let cols: number = mat[0].length;

    if (rows * cols !== r * c) return mat;

    if (rows === r && cols === c) return mat;

    let mat1D: number[] = [];

    let matResp: number[][] = [];

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {
        
            mat1D.push(mat[i][j]);

        }

    }

    for (let i = 0; i < r; i++) {

        let row: number[] = [];

        for (let j = 0; j < c; j++) {

            row[j] = mat1D.shift();

        }

        matResp.push(row);

    }

    return matResp;

};