class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) return this.head = new Node(val);

    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      return curr.next = new Node(val)
    }

    this._append(val, curr.next)
  }

  print() {
    const output = this._print(this.head)

    console.log(output)
  }

  _print(curr) {
    if (curr === null) return '';

    return curr.val + '->' + this._print(curr.next)
  }

  contains(target) {
    return this._contains(target, this.head)
  }

  _contains(target, curr) {
    if (curr === null) return false;

    if (curr.val === target) return true;

    return this._contains(target, curr.next)
  }
}

const list = new LinkedList();
list.append(11)
list.append(7)
list.append(10)
list.append(2)

list.print()

const sumListIterative = (head) => {
  let sum = 0;
  let curr = head;

  while (curr !== null) {
    sum += curr.val
    curr = curr.next;
  }

  return sum;
} // O(n) time, O(1) space

console.log(sumListIteration(list.head))

const sumList = (head) => {
  if (head === null) return 0

  return head.val + sumList(head.next)
} // O(n) time, O(n) space

console.log(sumList(list.head))