import LinkedList from "./linked-list";

export function removeDups(list: LinkedList<number>) {
  const set = new Set<number>();
  let currentNode = list.head;
  const newList = new LinkedList<number>();

  while (currentNode) {
    const data = currentNode.data;

    if (!set.has(data)) {
      set.add(data);
      newList.push(data);
    }

    currentNode = currentNode.next;
  }

  return newList;
}
