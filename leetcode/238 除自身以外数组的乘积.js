var productExceptSelf = function(nums) {
    let n = nums.length
    let ans = new Array(n).fill(1)
    let righta = 1
    ans[0] = 1
    for(let i =1; i< n; i++){
        ans[i] = ans[i-1] * nums[i-1]
    }
    for(let i = n-1; i >= 0; i--){
        ans[i] = ans[i]*righta
        righta *= nums[i]
    }
    return ans
};

productExceptSelf([1,2,3])