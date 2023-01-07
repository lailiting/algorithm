var reverseList = function(head) {
    let prev = null
    let curv=head
    while(curv){
        const next = curv.next
        curv.next=prev
        prev=curv
        curv=next
    }
    return prev
};