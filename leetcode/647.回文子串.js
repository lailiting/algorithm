var countSubstrings = function(s) {
    let result = 0
    // i又可能是某个回文字符串的奇或者偶的中心节点
    for(let i =0; i < s.length; i++){
            isSubstring(i, i+1)
            isSubstring(i, i)
    }
    function isSubstring(start, end){
        while(start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)){
            start--;
            end++;
            result++;
        }
    }
    return result
};