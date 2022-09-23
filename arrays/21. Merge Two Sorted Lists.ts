/**
 * Definition for singly-linked list.
 */
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result: ListNode;
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;

    }

    if (list1.val < list2.val) {
        result = list1;
        result.next = mergeTwoLists(list1.next, list2);
    } else {
        result = list2;
        result.next = mergeTwoLists(list1, list2.next);
    }

    return result;
};

console.log(mergeTwoLists(buildLinkedList([1, 2, 4]), buildLinkedList([1, 3, 4])));

function buildLinkedList(values: number[]) {
    let head: ListNode | null = null;
    for (let i = values.length - 1; i >= 0; i--) {
        const item: ListNode = new ListNode(values[i], head);
        head = item;
    }
    return head;
}

