var removeDuplicates = function(nums) {
    let listlen = nums.length
    let i =0
    j =1
    while (j < listlen){
        if(nums[i] != nums[j]){
            nums[i+1] = nums[j]
            i++
        }
        j++
    }
    return i+1
};