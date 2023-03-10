// 根据左右边界

var spiralOrder = function(matrix) {
    let res = []
    let up = 0, down =( matrix.length-1), left = 0, right = (matrix[0].length-1);
    while(true){
        for(let i = left; i <= right; i++){
            res.push(matrix[up][i])
        }
        if(++up > down){
            break
        }
        for(let i = up; i <= down; i++){
            res.push(matrix[i][right])
        }
        if(--right < left){
            break
        }
        for(let i = right; i >= left; i--){
            res.push(matrix[down][i])
        }
        if(--down < up){
            break
        }
        for(let i = down; i >= up; i--){
            res.push(matrix[i][left])
        }
        if(++left > right){
            break
        }
    }
    return res
};

spiralOrder("3[a]2[bc]")