function isValidSudoku(board: string[][]): boolean {

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {

            let currCell: string = board[i][j];

            if (currCell !== ".") {

                if (!isRowValid(board[i], currCell)) {
                    return false;
                }

                if (!isColumnValid(board, j, currCell)) {
                    return false;
                }

                if (!isSubBoxValid(board, i, j)) {
                    return false;
                }

            }

        }

    }

    return true;

};

function isRowValid(row: string[], cell: string): boolean {

    return row.filter(elem => elem === cell).length === 1

}

function isColumnValid(board: string[][], colPos: number, cell: string): boolean {

    let times: number = 0;

    for (let i = 0; i < board.length; i++) {

        if (board[i][colPos] === cell) {
            times++;
        }

        if (times > 1) {
            return false;
        }

    }

    return true;

}

function isSubBoxValid(board: string[][], rowPos: number, colPos: number): boolean {
    
    let times: number = 0;

    let currCell: string = board[rowPos][colPos];

    let iStart: number = Math.floor(rowPos / 3) * 3
    let iEnd: number = iStart + 3;

    let jStart: number = Math.floor(colPos / 3) * 3;
    let jEnd: number = jStart + 3;

    for (let i = iStart; i < iEnd; i++) {
        for (let j = jStart; j < jEnd; j++) {
            
            if (board[i][j] === currCell) {
                times++;
            }

            if (times > 1) {
                return false;
            }

        }
    }

    return true;

}