//Codewars Kata Completions
//Tom Bisom @Darkshadows61
//Space to test code before creating a seperate file with the finished product

function twoSum(nums, target) {
    for (i=0; i<nums.length; i++) {
        for (j=0; j<nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
}