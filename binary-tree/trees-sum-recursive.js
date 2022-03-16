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
  if (root === null) return 0;

  return sumTree(root.left) + root.val + sumTree(root.right);
}

console.log(sumTree(a)); // 16