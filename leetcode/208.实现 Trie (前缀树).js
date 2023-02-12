// 实现前缀匹配

function createTrie(){
    this.child = {}
    this.end = false
}

var Trie = function() {
    this.root = new createTrie()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root
    for(let c of word){
        if (!cur.child[c]){
            cur.child[c] = new createTrie()
        }
        cur = cur.child[c]
    }
    cur.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root
    for(let c of word){
        if(!cur.child[c]) return false
        cur = cur.child[c]
    }
    return cur.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
   let cur = this.root
    for(let c of prefix){
        if(!cur.child[c]) return false
        cur = cur.child[c]
    }
    return true
};