var searchRange = function(nums, target) {
    let ans = [-1,-1]
    let left = 0, right=nums.length-1;
    while(left < right){
        let mid = Math.floor((right+left)/2)
        if(nums[mid] >= target){
            right = mid
        }else{
            left = mid+1
        }
    }
    if(target != nums[left]){
        return ans
    }
    ans[0]=left
    left = 0;
    right=nums.length-1;
    while(left < right){
        let mid = Math.floor((right+left)/2)+1
        if(nums[mid] <= target){
            left = mid
        }else{
            right = mid-1
        }
    }
    ans[1]=right
    return ans
};

console.log(searchRange([5,7,7,8,8,10],8))