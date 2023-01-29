function twoSum(nums: number[], target: number): number[] {

    let map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {

        let complementIndex: number | undefined = map.get(nums[i]);

        if (complementIndex != undefined) {

            return [complementIndex, i];

        }

        map.set(target - nums[i], i);

    }

    return []

};