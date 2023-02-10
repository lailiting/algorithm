var maxProduct = function(nums) {
    let prevMin=1, prevMax = 1;
    let result = -Infinity;
    let temp1 = 0, temp2=0;
    for(const item of nums){
        temp1 = prevMin*item
        temp2 = prevMax*item
        prevMin = Math.min(temp1, temp2, item)
        prevMax = Math.max(temp1, temp2, item)
        result=Math.max(result, prevMax)
    }
    return result
};