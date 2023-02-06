
//   Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}



function hasCycle(head: ListNode | null): boolean {

    let tortoise: ListNode | null = head;
    let hare: ListNode | null = head;

    while (
        hare &&
        hare.next &&
        tortoise
    ) {

        hare = hare.next.next;

        if (hare === tortoise) {
            return true;
        }

        tortoise = tortoise.next;

    }

    return false;

};