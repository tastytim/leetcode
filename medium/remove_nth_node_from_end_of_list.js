/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    p1 = head;
    p2 = head;
    for(let i = 0; i< n;i++){
        p2 = p2.next
    }

    if(!p2){
        return head.next
    }

    while(p2.next){
       p1 = p1.next
       p2 = p2.next
    }

    p1.next = p1.next.next
    return head
};