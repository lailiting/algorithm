// 使用动态规划
// 状态转移方程f(i,j) = f(i-1,j)+f(i,j-1)。也就是m,n由它的上方和左边路径方法的和
// 初始的直下方和直右方的方法都是1

var uniquePaths = function(m, n) {
    let f = new Array(m).fill(0).map(() =>  new Array(n).fill(0))
    for(let i = 0; i < m; i++){
        f[i][0] = 1
    }
     for(let i = 0; i < n; i++){
        f[0][i] = 1
    }

    for(let i = 1; i< m; i++){
        for(let j = 1; j < n; j++){
            f[i][j] = f[i-1][j] + f[i][j-1]
        }
    }
    return f[m-1][n-1]
};