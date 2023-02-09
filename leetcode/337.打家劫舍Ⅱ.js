var rob = function(root) {
    let res = dfs(root)
    return Math.max(res[0], res[1])
};

var dfs = function(root){
    if(root === null){
        return [0,0]
    }
    // 记录偷或者不偷的钱
    let res = [0, 0]
    let left = dfs(root.left)
    let right = dfs(root.right)
    // 如果偷的话 就算自身加上不偷孩子的值
    res[0] = root.val + left[1] + right[1]
    res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    return res
}