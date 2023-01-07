var subsets = function(nums) {
    let res = [[]]
    for(const num of nums){
        let n = res.length
        for(let i = 0; i < n; i++){
            let b = res[i].slice()
            b.push(num)
            res.push(b)
        }
    }
    return res
};