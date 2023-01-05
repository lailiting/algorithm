var countBits = function(n) {
    let res=new Array(n+1).fill(0)
    let heighti=0
    for(let i=1;i<=n;i++){
        if((i & (i-1)) == 0){
            heighti = i
        }
        res[i] = res[i-heighti]+1
    }
    return res
};




countBits(20)