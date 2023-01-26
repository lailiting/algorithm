

// 实现要根据开始区间排序，不然判断起来会更复杂
// 要把遍历最后一个值的结果保存到result中

var merge = function(intervals) {
    let result = []
    intervals.sort((a, b) => a[0]-b[0])
    let start = intervals[0][0], end = intervals[0][1]
    for(let i = 1; i< intervals.length; i++){
        let current = intervals[i]
        if(current[0] <= end){
            end = Math.max(end,current[1])
        }else{
            result.push([start,end])
            start = current[0]
            end = current[1]
        }
    }
    result.push([start,end])
    return result
};