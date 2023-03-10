var lengthOfLongestSubstring = function(s) {
    let record = {}
    slen = s.length
    let j = 0
    let ans = 0
    for(let i = 0; i<slen; i++){
        let pos = record[s[i]] >= 0 ? record[s[i]] : -1
        j = j > pos+1 ? j : pos+1
        ans = ans > i -j + 1  ? ans : i-j+1
        record[s[i]] = i
    }
    return ans
};

console.log(lengthOfLongestSubstring("abcabcbb"))

// 左边界是最后出现的重复字符 