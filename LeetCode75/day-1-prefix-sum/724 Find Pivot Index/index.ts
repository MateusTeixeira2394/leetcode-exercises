function pivotIndex(nums: number[]): number {

    let pivot: number = 0;
    let satisfied: boolean = false;

    while (pivot < nums.length && !satisfied) {

        let sumLeft: number = 0;
        let sumRight: number = 0;

        let leftIndex: number = 0;
        let rightIndex: number = nums.length - 1;

        while (leftIndex < pivot) {
            sumLeft = sumLeft + nums[leftIndex];
            leftIndex++;
        }

        while (rightIndex > pivot) {
            sumRight = sumRight + nums[rightIndex];
            rightIndex--;
        }

        if (sumLeft === sumRight) {
            satisfied = true;
        } else {
            pivot++;
        }

    }

    if (satisfied){
        return pivot;
    }

    return -1;

};