// 使用动态规划
// 注意边界条件

var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for (let i = 1; i <= m ; i++){
        dp[i][1]=dp[i-1][1]+grid[i-1][0]
    }
     for (let j = 1; j <= n ; j++){
        dp[1][j]=dp[1][j-1]+grid[0][j-1]
    }
    for (let i = 2; i <= m; i++){
        for (let j = 2; j <= n; j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i-1][j-1]
        }
    }
    return dp[m][n]
};