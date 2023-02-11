var maxProfit = function(prices) {
    let n = prices.length
    if(n <= 1){
        return 0
    }
    let dp = []
    for(let i in prices){
        dp.push([0,0])
    }
    // 维护一个当前钱最多的状态，考虑今天是买还是卖跟有钱
    // 持有股票的时候才能卖
    // 卖了过一天才能买
    dp[0][0] = 0 //今天没有
    dp[0][1] = 0-prices[0] //今天有
    for(let i = 1; i < n; i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][1], ((i-2)>=0? dp[i-2][0]:0)- prices[i])
    }
    return Math.max(dp[n-1][0], dp[n-1][1])
};