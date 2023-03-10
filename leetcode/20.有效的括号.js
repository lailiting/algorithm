var isValid = function(s) {
    const model = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    const stack = []
    for(let c of s){
        if(model[c]){
            if(stack.length === 0 || model[c] !== stack[stack.length-1]){
                return false
            }
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    return stack.length === 0
};