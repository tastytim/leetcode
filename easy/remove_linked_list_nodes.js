var removeElements = function(head, val) {
    if (!head) {
      return null;
    }
    //start 
    while (head && head.val === val) {
      head = head.next;
    }
  
  
    if (!head) {
      return null;
    }
    //middle and end
    let curr = head;
    while(curr && curr.next){
      if(curr.next.val === val){
        curr.next = curr.next.next
      }else{
        curr = curr.next;
      }
    }
    return head
  };