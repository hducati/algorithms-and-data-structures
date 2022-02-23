class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new Node(val)
    } else {
      const pushedNode = new Node(val)
      pushedNode.next = this.top;
      this.top = pushedNode
    }

    this.size++;
  }

  getTop() {
    return this.top.val;
  }

  pop() {
    if (this.size === 0) return null;

    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;

    return poppedNode.val;
  }
}

const myStack = new Stack();

myStack.push('a')
myStack.push('b')
myStack.push('c')

console.log(myStack.size);
console.log(myStack.top);
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.size);