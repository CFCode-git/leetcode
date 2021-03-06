/**
 * Given a linked list, determine if it has a cycle in it.
 * Follow up:
 * Can you solve it without using extra space?
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleByHashTables = (head) => {
  if (!head) return false;

  const map = new Map();

  while (head.next !== null) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, 'yes');
    head = head.next;
  }
  return false;
};

const hasCycleByTwoPointers = (head) => {
  if (!head) return false;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  if (fast === null || fast.next === null) return false;

  return false;
};

module.exports = [
  hasCycleByHashTables,
  hasCycleByTwoPointers
];
