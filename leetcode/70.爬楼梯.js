var climbStairs = function(n) {
    if( n == 0 ){
        return []
    }
    let result = []
    for(let i = 0; i < n; i++){
        if(i==0){
            result.push(1)
        }else if(i==1){
            result.push(2)
        }else{
            result.push(result[i-1]+result[i-2])
        }
    }
    return result[n-1]
};