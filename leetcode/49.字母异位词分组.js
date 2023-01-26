var groupAnagrams = function(strs) {
    let map = {}
    for(let str of strs){
        const count = new Array(26).fill(0)
        for(let c of str){
             count[c.charCodeAt() - 'a'.charCodeAt()]++
        }
        map[count] ? map[count].push(str) : map[count]=[str]
    }
    return Object.values(map)
};