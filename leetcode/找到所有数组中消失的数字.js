var findDisappearedNumbers = function(nums) {
    const n=nums.length
    for(const num of nums){
        x=(num-1)%n
        nums[x]+=n
    }
    let ret = []
    for(const [i, num] of nums.entries()){
        if(num <=n){
            ret.push(i+1)
        }
    }
    return ret
};