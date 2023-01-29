// 贪心算法
// splice删除元素插入指定位置后改变原数组
var reconstructQueue = function(people) {
    let res = []
    people.sort((a,b) => a[0] === b[0] ? a[1] - b[1]: b[0]-a[0])
     people.forEach(item => {
        // splice
        res.splice(item[1], 0, item); // 插入到k对应的位置
    })
    return res
};