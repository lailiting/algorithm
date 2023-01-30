var numSquares = function(n) {
    let dp = new Array(n+1).fill(999)
    dp[0] = 0
    for(let i = 1; i <= n; i++){
        for(let j = 1; j *j <= i; j++){
            // 不是完全平方数的话会更大
            dp[i] = Math.min(dp[i- j*j] +1, dp[i])
        }
    }
    console.log(dp)
    return dp[n]
};