function maxSubArray(nums: number[]): number {

    let currSum: number = 0;
    let maxSum: number = nums[0];

    for (let i = 0; i < nums.length; i++) {

        currSum = currSum + nums[i];

        if(currSum > maxSum){
            maxSum = currSum;
        }

        if(currSum < 0){
            currSum = 0;
        }

    }

    return maxSum;

};