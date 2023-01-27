var wordBreak = function(s, wordDict) {
    const n = s.length
    const fn = new Array(n+1).fill(false)
    fn[0] = true
    for(let i = 1; i <= n; i++){
        for(let j = i; j > 0; j--){
            if(fn[j-1] && wordDict.indexOf(s.substring(j-1,i)) !== -1){
                fn[i] = true
                break
            }
        }
    }
    return fn[n]
};