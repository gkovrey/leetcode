
function removeDuplicates(nums: number[]): number {
    let count = nums.length;
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if (i + 1 != nums.length && nums[i] == nums[i + 1]) {
            delete nums[i];
            count--;
        }
    }

    nums.sort((a,b) => a - b );
    return count;
};

const arr = [1, 1, 2];
console.log(removeDuplicates(arr));
console.log(arr);