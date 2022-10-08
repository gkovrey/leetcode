function searchInsert(nums: number[], target: number): number {
    if (nums.length == 0) return 0;
    if (target <= (nums?.at(0) || 0)) return 0;
    if (target > (nums?.at(-1) || 0)) return nums.length;

    let middle = Math.floor((nums.length)/2);
    while (true) {
        let average = nums.at(middle) || 0;
        if (target == average) return middle;

        if (target > average && target < (nums.at(middle + 1) || 0)) return middle + 1;
        if (target <= average && target > (nums.at(middle - 1) || 0)) return middle;
        if (target > average) {
            middle = Math.round(middle + (nums.length - middle) / 2);
        } else {
            middle = Math.floor(middle / 2);
        }

        if (middle >= nums.length) return nums.length;
        if (middle == 0 ) return  0;
    }

};


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






