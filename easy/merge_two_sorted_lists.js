 
var list1 = [1,2,4]
var list2 = [1,3,4]


// RECURSION
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    }

    if (l2 === null) {
        return l1
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1

    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}
console.log(mergeTwoLists(list1,list2));





  //Two Points
var mergeTwoLists = function(l1,l2){
 
   let dummyHead = new ListNode(0)
   let current = dummyHead
 
   while(list1 !==null && list2!==null){
     if(list1.val < list2.val){
         current.next = list1
       list1 = list1.next
       
     }else{
       current.next = list2
       list2 = list2.next
     }

     current = current.next
  }

  
  if(list1!==null){
   current.next = list1
  }else{
   current.next = list2
  }

  return dummyHead.next
}




   
