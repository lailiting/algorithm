var maxArea = function(height) {
    i = 0
    l = height.length-1
    maxW = 0
    while(i < l){
        ch = height[i] < height[l] ? height[i] : height[l]
        cc = ch*(l-i)
        if(cc > maxW){
            maxW = cc
        }
        if(height[i] < height[l]){
            i++
        }else{
            l--
        }
    }
    return maxW
};