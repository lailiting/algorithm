/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length
    if(n<2){
        return s
    }
    let maxS=""
    for(let i=0; i<n; i++){
        helper(i,i)
        helper(i,i+1)
    }
    return maxS

    function helper (l,r) {
        while(l >= 0 && r < n && s[l]==s[r]){
            l--
            r++
        }
        if(r-l-1 > maxS.length){
            maxS=s.slice(l+1, r)
        }
    }
};