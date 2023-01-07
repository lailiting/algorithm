var majorityElement = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }
    const nmap = new Map()
    for(const num of nums){
        let a = nmap.get(num)
        if(a){
            nmap.set(num, a+1)
            if(a+1 > nums.length/2){
                return num
            }
        }else{
            nmap.set(num,1)
        }
    }
};