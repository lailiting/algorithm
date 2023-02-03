var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }
    let temp = preorder[0]
    let mid = inorder.indexOf(temp)
    let root = new TreeNode(temp)
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))
    return root
  };