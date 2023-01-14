// 动态规划，dp[i]表示有i个节点时的搜索树总类
// dp[i] = dp[j-1][i-j]的和 j就是不同位置断开

var numTrees = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i <= n; i++){
        for (let j = 1; j <= i ; j++){
            dp[i]+=dp[j-1]*dp[i-j]
        }
    }
    return dp[n]
};