// 时间复杂度o(n) 空间复杂度o(1)

var flatten = function(root) {
    let cur = root
    while(cur){
        if(cur.left){
            const next = cur.left
            let bottom = next
            while(bottom.right){
                bottom = bottom.right
            }
            bottom.right=cur.right
            cur.left = null
            cur.right = next
        }
        cur=cur.right
    }
    return root
};