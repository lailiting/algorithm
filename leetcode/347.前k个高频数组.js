var topKFrequent = function(nums, k) {
    let result = []
    let map = new Map()
    nums.map(i => {
        if(map.has(i)){
            map.set(i, map.get(i)+1)
        }else{
            map.set(i, 1)
        }
    })
    let arr = [...map]
    arr.sort((a,b) => b[1] - a[1])
    for(let i  = 0; i < k; i++){
        result.push(arr[i][0])
    }
    return result
};