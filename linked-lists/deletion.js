class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const deleteValue = (head, target) => {
  if (head.val === target) return head.next;

  let prev = null;
  let curr = head;

  while (curr !== null) {
    if (curr.val === target){
      prev.next = curr.next
    }

    prev = curr
    curr = curr.next;
  }

  return head;
} // Time O(n) - Space O(1)

const recursiveDeleteValue = (head, target) => {
  if (head.val === target) return head.next;

  _recursiveDeleteValue(head, null, target)

  return head;
}

const _recursiveDeleteValue = (curr, prev, target) => {
  if (curr === null) return;

  if (curr.val === target) return prev.next = curr.next;

  return _recursiveDeleteValue(curr.next, curr, target)
} // Time O(n) - Space O(n)

const print = (head) => {
  if (head === null) return;

  console.log(head.val);
  print(head.next)
}

const newHead = deleteValue(a, "a")
print(newHead)

console.log('--------------------')

const recursiveHead = recursiveDeleteValue(a, "b")
print(recursiveHead)