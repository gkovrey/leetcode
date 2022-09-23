function searchInsert(nums: number[], target: number): number {

    if (nums.length == 0) return 0;
    if (nums.length == 1) {
        if (nums[0] < target ) return 1;
        if (nums[0] == target ) return 0;
        if (nums[0] > target) return 0;
    }
    const middle = Math.floor((nums.length)/2);
    const average = nums[middle];
    if (target == average) return middle;
    if (target > average) {
        return middle + searchInsert(nums.slice(middle + 1, nums.length), target)
    } else {
        if (middle > 1) return searchInsert(nums.slice(0, middle - 1), target)
        return searchInsert(nums.slice(0, middle), target)
    }

};


console.log(searchInsert([1,3,5,6],5)); // 2
console.log(searchInsert([1,3,5,6],2)); // 1
console.log(searchInsert([1,3,5,6],7)); // 4
console.log(searchInsert([1,3,5,6],0)); // 0
console.log(searchInsert([1],0)); // 0
console.log(searchInsert([1,3],2)); // 1
console.log(searchInsert([1,2,4,6,7], 3)); // 2




