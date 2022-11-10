var lengthOfLongestSubstring = function(s) {
    let record = {}
    slen = s.length
    console.log(slen)
    let j = 0
    let ans = 0
    for(let i = 0; i<slen; i++){
        j = j > record[s[i]] + 1 ? j : record[s[i]] + 1
        ans = ans > i -j+1 ? ans : i-j+1
        record[s[i]] = i
    }
    return ans
};