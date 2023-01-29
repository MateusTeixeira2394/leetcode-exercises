function containsDuplicate(nums: number[]): boolean {

    let map: Map<string, number> = new Map();

    for (let i = 0; i < nums.length; i++) {

        let currValue: number = nums[i]

        if (map.get(currValue.toString())) {
            return true;
        }

        map.set(currValue.toString(), 1);

    }

    return false;

};