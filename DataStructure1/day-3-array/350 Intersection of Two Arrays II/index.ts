function intersect(nums1: number[], nums2: number[]): number[] {

    return nums1.filter(elem1 => {

        const index = nums2.indexOf(elem1);

        if (index === -1) {
            return false
        } else {

            nums2.splice(index, 1);

            return true;
        }

    });


};