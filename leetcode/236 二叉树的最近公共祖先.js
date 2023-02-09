var lowestCommonAncestor = function(root, p, q) {
    // 查找qp递归函数
    function findpq(root,p,q){
        if(root === null || root === p || root === q){
            return root
        }
        let left = findpq(root.left, p, q)
        let right = findpq(root.right, p, q)
        // left right代表找到了还是没找到 没找到肯定就算null
        // 找到了就要看找到的p 还是q 还是都找到了
        // 如果找到了p q
        if(left !== null && right !== null){
            return root
        }
        return left ? left : right
    }

    return findpq(root, p,q)
};