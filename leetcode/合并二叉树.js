var mergeTrees = function(root1, root2) {
    const merge =  function(r1, r2){
        if(!r1){
            return r2
        }
        if(!r2){
            return r1
        }
        r1.val = r1.val+r2.val
        r1.left = merge(r1.left,r2.left)
        r1.right = merge(r1.right,r2.right)
        return r1
    }

    return merge(root1,root2)
};