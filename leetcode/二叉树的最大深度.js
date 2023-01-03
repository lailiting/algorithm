
//深度优先遍历
var maxDepth = function(root) {
    if(!root){
        return 0
    }else{
        let leftH=maxDepth(root.left)
        let rightH=maxDepth(root.right)
        return Math.max(leftH,rightH)+1
    }
};