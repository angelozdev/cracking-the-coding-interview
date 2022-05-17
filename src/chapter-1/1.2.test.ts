import { checkPermutation } from "./1.2";

describe("checkPermutation", () => {
  it.each([
    ["angelo", "logean"],
    ["aaaa", "aaaa"],
    ["aaab", "baaa"],
    ["abcd", "dcba"],
    ["asdf", "sdaf"],
    ["", ""],
  ])("should return true if '%s' is a permutation of '%s'", (s1, s2) => {
    expect(checkPermutation(s1, s2)).toBe(true);
  });

  it.each([
    ["a", ""],
    ["", "a"],
    ["b", "bb"],
  ])("should return false when %s.length !== %s.length", (s1, s2) => {
    expect(checkPermutation(s1, s2)).toBe(false);
  });

  it.each([
    ["angel", "logean"],
    ["aaaa", "bbbb"],
    ["b", "a"],
  ])(
    'should return false since "%s" is not a permutation of "%s"',
    (s1, s2) => {
      expect(checkPermutation(s1, s2)).toBe(false);
    }
  );
});
