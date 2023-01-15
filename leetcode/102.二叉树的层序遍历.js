// 利用队列

var levelOrder = function(root) {
    let result = [],quene = [];
    if(!root){
        return []
    }
    quene.push(root);
    while(quene.length != 0){
        result.push([])
        let n = quene.length
        for(let i = 0; i<n ; i++){
            let node = quene.shift()
            result[result.length-1].push(node.val)
            if(node.left){
                quene.push(node.left)
            }
            if(node.right){
                quene.push(node.right)
            }
        }
    }
    return result
};