var reverseWords = function(s) {
    let i = 0
    let result = ""
    while( i < s.length){
        let start = i
        while(i < s.length && s[i] !== " "){
            i++
        }
        for(let p = i-1; p >= start; p--){
            result+=s[p]
        }
        if(i < s.length && s[i] === " "){
            result+=" "
            i++
        }
    }
    return result
};