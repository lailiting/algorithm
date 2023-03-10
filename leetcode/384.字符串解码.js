var decodeString = function(s) {
    let result = ""
    let num = 0
    let stack = []
    let numstack = []
    for(let c of s){
        if(`${parseInt(c)}` === c){
            num = num*10 + parseInt(c)
        }else if(c === "["){
            stack.push(result)
            result = ""
            numstack.push(num)
            num=0
        }else if(c === ']'){
            repeatn = numstack.pop()
            result = stack.pop() + result.repeat(repeatn)
            num = 0
        }else{
            result +=c
        }
    }
    return result
};