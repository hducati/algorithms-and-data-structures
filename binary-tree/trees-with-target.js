class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstPrint = (root, target) => {
  const queue = [root];

  while(queue.length > 0) {
    const current = queue.shift();
  
    if (current.val === target) return true;

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return false;
}

console.log(breadthFirstPrint(a, "b")) // true
console.log(breadthFirstPrint(a, "g")) // false