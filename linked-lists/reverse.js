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

const print = (head) => {
  if (head === null) return;

  console.log(head.val);
  print(head.next)
}

const reverseList = (head) => {
  let prev = null; 
  let curr = head;

  while (curr !== null) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
} // Time O(n) - Space O(1)

const reverseListRecursive = (curr, prev = null) => {
  if (curr === null) return prev;

  const next = curr.next;

  curr.next = prev;
  return reverseListRecursive(next, curr)
} // Time O(n) - Space O(n)


print(a);

const newHead = reverseList(a)
console.log('--------------------------------------------------------')
print(newHead);

console.log('--------------------------------------------------------')
const newHeadRecursive = reverseListRecursive(a)
print(newHeadRecursive);