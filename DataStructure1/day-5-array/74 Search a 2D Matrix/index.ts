function searchMatrix(matrix: number[][], target: number): boolean {

    for (let i = 0; i < matrix.length; i++) {

        let lastElem: number = matrix[i][matrix[i].length - 1]
        
        if (target === lastElem) {
            return true;
        }

        if (target < lastElem) {
            return binarySearch(matrix[i], target);
        }

    }

    return false;

};

function binarySearch(
    list: number[],
    target: number,
    start: number = 0,
    end: number = list.length - 1
): boolean {
    
    let pivot: number = Math.floor((start + end) / 2);

    let middle: number = list[pivot]

    if (start > end || end < start) {
        return false;
    }

    if (target === middle) {
        return true;
    }

    if (target < middle) {
        return binarySearch(list, target, start, pivot - 1);
    }

    if (target > middle) {
        return binarySearch(list, target, pivot + 1, end);
    }

    return false;
}
