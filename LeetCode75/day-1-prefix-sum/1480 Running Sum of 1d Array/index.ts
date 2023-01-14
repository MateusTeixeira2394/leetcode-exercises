function runningSum(nums: number[]): number[] {

    var acc: number = 0;

    return nums.map<number>(elem => {

        acc = acc + elem;

        return acc;

    });
};
