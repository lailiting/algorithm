var isSymmetric = function(root) {
    return dfs(root.left, root.right)
};

var dfs = function(left, right){
    if(!left && !right){
        return true
    }
    if(!left || !right || left.val != right.val){
        return false
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left)
}