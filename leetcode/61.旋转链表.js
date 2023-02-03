var rotateRight = function(head, k) {
    if(k === 0 || !head){
        return head
    }
    let tail = head,p=head, bhead = head, n =0;
    while(p){
        tail = p
        p=p.next
        n++
    }
    k = k %n
    if( k ==0){
        return head
    }
    let prev=head ,end=head;
    for(let i =0; i < n-k; i++){
        prev = end;
        end = end.next;
    }
    prev.next=null
    head=end
    tail.next = bhead
    return head
};