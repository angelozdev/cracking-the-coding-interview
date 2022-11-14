import LinkedList from "./linked-list";
import { removeDups } from "./2.1";

describe("Remove Dups", () => {
  it.each([
    {
      numbersWithDups: [1, 1, 1, 1, 1],
      numbersWithoutDups: [1],
    },
    {
      numbersWithDups: [1, 1, 2, 3, 4, 4, 5, 6, 6, 4, 2, 4, 2, 3, 7, 8, 9, 10],
      numbersWithoutDups: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      numbersWithDups: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numbersWithoutDups: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      numbersWithDups: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
      numbersWithoutDups: [1, 2, 3],
    },
  ])(
    "should remove dups ($numbersWithoutDups) from linkend list ($numbersWithDups)",
    ({ numbersWithDups, numbersWithoutDups }) => {
      const list = new LinkedList<number>();
      numbersWithDups.forEach((n) => list.push(n));

      const listWithoutDups = removeDups(list);
      expect(listWithoutDups.toArray()).toEqual(numbersWithoutDups);
    }
  );

  it("should not modify the original list", () => {
    const list = new LinkedList<number>();
    [1, 1, 1, 1, 1].forEach((n) => list.push(n));

    removeDups(list);
    expect(list.toArray()).toEqual([1, 1, 1, 1, 1]);
  });

  it("should return an empty list if the original list is empty", () => {
    const list = new LinkedList<number>();
    const listWithoutDups = removeDups(list);
    expect(listWithoutDups.toArray()).toEqual([]);
  });

  it("should return a list with one element if the original list has one element", () => {
    const list = new LinkedList<number>();
    list.push(1);
    const listWithoutDups = removeDups(list);
    expect(listWithoutDups.toArray()).toEqual([1]);
  });

  it("should return a list with one element if the original list has two elements and they are the same", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(1);
    const listWithoutDups = removeDups(list);
    expect(listWithoutDups.toArray()).toEqual([1]);
  });
});
