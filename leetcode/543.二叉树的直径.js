var diameterOfBinaryTree = function(root) {
    let result = 0
    function depth(root){
        if(!root){
            return 0
        }

        let leftDepth = depth(root.left)
        let rightDepth = depth(root.right)

        result = Math.max(result, leftDepth+rightDepth)
        return Math.max(rightDepth,leftDepth) + 1
    }
    depth(root)
    return result
};