var sortColors = function(nums) {
    let start = 0, end = nums.length-1;
    let cur = 0
    function swap(a,b){
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    while( cur <= end){
        if(nums[cur] == 0){
            swap(cur, start)
            start++
            cur++
            //这里可以往后走是以为我们是从前往后遍历的，走过的地方可以保证nums[start]不等于2
        }else if(nums[cur] == 2){
            swap(cur, end)
            end--;
            //不能保证nums[end]不等于2或者是0
        }else if(nums[cur] == 1){
            cur++
        }
    }
    return nums
};