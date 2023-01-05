var lengthOfLIS = function(nums) {
    let n = nums.length
    let res = new Array(n).fill(1)
    for(let i = 0; i<n; i++){
        // console.log(res)
        for(let j = 0; j<i; j++){
            if(nums[i]>nums[j]){
                res[i]=Math.max(res[i],res[j]+1)
            }
        }
    }
    return Math.max(...res)
};

console.log(lengthOfLIS([0,1,0,3,2,3]))