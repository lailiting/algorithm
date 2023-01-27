// 利用贪心算法

var canJump = function(nums) {
    let maxPos = nums[0]
    for(let i = 0; i < nums.length; i++){
        if( i > maxPos){
            return false
        }
        maxPos = Math.max(maxPos, i+nums[i])
    }
    return true
};