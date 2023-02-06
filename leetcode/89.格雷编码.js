// 对称后个在左边补1
var grayCode = function(n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        const m = ret.length;
        for (let j = m - 1; j >= 0; j--) {
            console.log(1 << (i - 1));
            ret.push(ret[j] | (1 << (i - 1)));
        }
    }
    return ret;
};

// 另一种解法就是先对称并且把他们往左边移一位 然后补一个1
// 注意向先进的时候要改变原来的值
var grayCode = function(n) {
    const ret = [0]
    for(let i = 1; i <=n ; i++){
        let m = ret.length-1
        for(let j = m; j>= 0; j--){
            ret[j] = ret[j] << 1; //向前进一个
            ret.push(ret[j]+1)
        }
    }
    return ret
};