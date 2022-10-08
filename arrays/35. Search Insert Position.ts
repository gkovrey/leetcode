function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length -1]) return nums.length;

    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.round(start + (end - start) / 2);
        if (target == nums[mid]) return mid;
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}


console.log(searchInsert([1,3,5,6],5)); // 2
console.log(searchInsert([1,3,5,6],2)); // 1
console.log(searchInsert([1,3,5,6],7)); // 4
console.log(searchInsert([1,3,5,6],0)); // 0
console.log(searchInsert([1],0)); // 0
console.log(searchInsert([1,3],2)); // 1
console.log(searchInsert([1,2,4,6,7], 3)); // 2
console.log(searchInsert([1], 2)); // 1
console.log(searchInsert([1], 1)); // 0
console.log(searchInsert([2,4,5,6,7,8], 7)); // 4
console.log(searchInsert([1,3,4,5,6,8,10], 5)); // 3






