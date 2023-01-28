var dailyTemperatures = function(temperatures) {
    //暴力遍历
    let n = temperatures.length;
    let res = new Array(n).fill(0);//初始化，假设后续都没出现过更高气温
    for(let i = 0; i < n - 1; i++) {//最后一个肯定是0，不用算
        for(let j = i + 1; j < n; j++) {
            if(temperatures[j] > temperatures[i]) {//找到第一个高于当前温度的，修改数组
                res[i] = j - i;
                break; 
            }
        }
    }
    return res;
};