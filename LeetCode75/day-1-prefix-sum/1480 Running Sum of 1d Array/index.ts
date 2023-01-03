function runningSum(nums: number[]): number[] {

    for (let i = 0; i < nums.length; i++) {

        const pv: number = nums[i-1] || 0

        nums[i] = nums[i] + pv;

    };

    return nums;
};