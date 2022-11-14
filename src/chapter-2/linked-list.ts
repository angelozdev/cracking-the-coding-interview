class Nodo<T> {
  data: T;
  next: Nodo<T> | null;
  prev: Nodo<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  length: number;
  head: Nodo<T> | null;
  tail: Nodo<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get isEmpty() {
    return this.length === 0;
  }

  push(data: T) {
    const node = new Nodo<T>(data);
    if (this.isEmpty) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  toArray() {
    const array = new Array<T>(this.length);
    let currentNode = this.head;
    let i = 0;

    while (currentNode) {
      array[i] = currentNode.data;
      currentNode = currentNode.next;
      i++;
    }

    return array;
  }

  forEach(callback: (value: T, index: number, array: T[]) => void) {
    const array = this.toArray();
    return array.forEach(callback);
  }

  map<U>(callback: (value: T, index: number, array: T[]) => U): U[] {
    const array = this.toArray();
    return array.map(callback);
  }

  print(separator = " <-> ") {
    const array = this.toArray();
    console.log(array.join(separator));
  }
}

export default LinkedList;
