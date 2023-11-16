class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}
const ll = new LinkedList();
ll.insert(1);
ll.insert(1);
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(3);
ll.insert(3);
ll.insert(4);
ll.insert(4);

function deleteDuplicates(head) {
  let node = ll.head;
  while (node.next) {
    if (node.value === node.next.value) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return ll.head;
}

const result = deleteDuplicates();
// console.log(result);
ll.print();
