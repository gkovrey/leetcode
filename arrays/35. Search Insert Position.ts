function searchInsert(nums: number[], target: number): number {
    if (nums.length == 0) return 0;
    if (target <= (nums.at(0) || 0)) return 0;
    if (target > (nums.at(-1) || 0)) return nums.length;

    let middle = Math.round( nums.length / 2);
    let diff = Math.round(middle / 2);
    while (true) {
        let value = nums.at(middle) || 0;
        if (target == value) return middle;
        if (target > value && target < (nums.at(middle + 1) || 0)) return middle + 1;
        if (target <= value && target > (nums.at(middle - 1) || 0)) return middle;

        if (target > value) {
            middle += diff;
        } else {
            middle -= diff;
        }

        diff = Math.round(diff / 2);
    }
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






