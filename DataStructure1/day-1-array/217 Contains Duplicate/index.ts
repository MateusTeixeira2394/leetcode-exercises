function containsDuplicate(nums: number[]): boolean {

    var distinctNumbers: number[] = [];

    for (let i = 0; i < nums.length; i++) {

        if(distinctNumbers.some(elem => elem === nums[i])){
            return true;
        } else {
            distinctNumbers.push(nums[i]);
        }

    }

    return false;

};