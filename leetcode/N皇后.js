var solveNQueens = function(n) {
    const res =  new Array(n).fill(0)
    const q=[]
    queen(0)

    // 检验是否在同一列或者同一斜线
    function check(i,j){
        for(let m=0; m<i; m++){
            if(res[m] == j || Math.abs(i-m) == Math.abs(res[m]-j)){
                return false
            }
        }
        return true
    }

    function queen(i){
        if(i==n){
            let a =[]
            for(let m = 0; m<n; m++){
                let stra=""
               for(let o = 0; o < res[m]; o++){
                   stra+="."
               }
               stra+="Q"
               for(let o = 0; o < n-res[m]-1; o++){
                   stra+="."
               }
               a.push(stra)
            }
             q.push(a)
             return 
        }
        for(let j = 0; j<n; j++){
            if(check(i,j)){
                res[i]=j
                queen(i+1)
            }
        }
    }
    return q
};