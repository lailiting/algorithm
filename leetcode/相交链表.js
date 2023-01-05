var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB == null){
        return null
    }
    let PA=headA,PB=headB;
    while(PA !== PB){
        PA=PA===null?headB:PA.next;
        PB=PB===null?headA:PB.next;
    }
    return PB
};