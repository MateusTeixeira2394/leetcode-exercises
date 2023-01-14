//   Definition for singly - linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function middleNode(head: ListNode | null): ListNode | null {

    const length: number = getLength(head);
    const pivot: number = Math.floor(length / 2);
    let index: number = 0;

    while (index < pivot && head) {

        head = head.next;
        index++;

    };

    return head;

};

function getLength(head: ListNode | null): number {

    let length: number = 0;

    while (head) {

        length++;
        head = head.next;

    };

    return length;

};

// ---------- The hare and tortoise response ----------

// function middleNode(head: ListNode | null): ListNode | null {

//     let hare: ListNode | null = head;
//     let tortoise: ListNode | null = head;

//     while (hare && hare.next && tortoise) {

//         tortoise = tortoise?.next;
//         hare = hare.next.next;

//     }

//     return tortoise;
// };