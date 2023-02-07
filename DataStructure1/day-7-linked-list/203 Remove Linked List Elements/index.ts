
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function removeElements(head: ListNode | null, val: number): ListNode | null {

    let curr: ListNode | null = head;
    let prev: ListNode | null = new ListNode(0, head);
    let result: ListNode | null = prev;

    while (curr && curr.val) {

        if (curr.val === val) {

            let temp: ListNode | null = curr;
            prev.next = curr.next;
            curr = curr.next;
            temp.next = null;

        } else {

            prev = curr;
            curr = curr.next;

        };


    };

    return result.next;

};