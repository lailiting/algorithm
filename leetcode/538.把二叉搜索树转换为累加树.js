// 反序的中序遍历

var convertBST = function(root) {
    var total = 0
    function dfs(root){
        if(root){
            dfs(root.right)
            total+=root.val
            root.val = total
            dfs(root.left)
        }
    }
    dfs(root)
    return root
};