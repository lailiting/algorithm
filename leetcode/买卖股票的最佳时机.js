var maxProfit = function(prices) {
    minPrice = 999999
    maxprofit = 0
    // forEach函数比map函数性能好很多
    prices.forEach(item => {
        maxprofit = item-minPrice > maxprofit ? item-minPrice: maxprofit
        minPrice = item < minPrice?item:minPrice
    })
    return maxprofit

};