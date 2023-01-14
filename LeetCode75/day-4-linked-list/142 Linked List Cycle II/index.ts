
//  Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function detectCycle(head: ListNode | null): ListNode | null {

    let hare: ListNode | null = head;
    let tortoise: ListNode | null = head;
    let tortoisesFriend: ListNode | null = head;

    while (
        hare &&
        hare.next &&
        hare.next.next
    ) {

        tortoise = tortoise.next;
        hare = hare.next.next;

        if (hare === tortoise) {
            break;
        }

    };

    if (
        !hare ||
        !hare.next ||
        !hare.next.next
    ) {
        return null;
    };

    while (tortoise.next) {

        if (tortoisesFriend === tortoise) {
            return tortoise;
        };

        tortoisesFriend = tortoisesFriend.next;
        tortoise = tortoise.next;
    };

    return null;

};



