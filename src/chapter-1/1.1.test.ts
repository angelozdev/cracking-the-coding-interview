import { isUnique, isUnique2 } from "./1.1";

const uniques = ["asdfghjkl", "a", "1234567890", "Aa"];
const noUniques = ["aaaa", "bb", "asdfghjkla", "aasdfghjkl"];

describe("isUnique - set", () => {
  test.each(uniques)("should return true when string is %s", (s) => {
    expect(isUnique(s)).toBe(true);
  });

  test.each(noUniques)("should return false when string is %s", (s) => {
    expect(isUnique(s)).toBe(false);
  });
});

describe("isUnique2 - sorted", () => {
  test.each(uniques)("should return true when string is %s", (s) => {
    expect(isUnique2(s)).toBe(true);
  });

  test.each(noUniques)("should return false when string is %s", (s) => {
    expect(isUnique2(s)).toBe(false);
  });
});
