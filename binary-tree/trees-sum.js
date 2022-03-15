class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(4);
const d = new Node(8);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
  const queue = [root];
  let sum = 0;

  while(queue.length > 0) {
    const current = queue.shift();

    sum += current.val;

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return sum;
}

console.log(sumTree(a)); // 16