var middleNode = function(head) {
  if(!head.next)return head
    let slow = head
    let fast = head
    let mid
    while(slow && fast && fast.next){
       mid = slow.next
       slow = slow.next
       fast = fast.next.next
    }

    return mid
    
};