import { checkPermutation, checkPermutationSorted } from "./1.2";

const fns = [checkPermutation, checkPermutationSorted];

fns.forEach((fn) => {
  describe("checkPermutation", () => {
    it.each([
      ["abcdefghi", "ihgfedcba"],
      ["1a1", "a11"],
      ["1234567812345678", "8877665544332211"],
      ["icarraci", "carcarii"],
    ])("should return true if '%s' is a permutation of '%s'", (s1, s2) => {
      expect(fn(s1, s2)).toBe(true);
    });

    it.each([
      ["a", ""],
      ["", "a"],
      ["b", "bb"],
    ])("should return false when %s.length !== %s.length", (s1, s2) => {
      expect(fn(s1, s2)).toBe(false);
    });

    it.each([
      ["abcdefghiz", "ihgfedcbaa"],
      ["1a1", "11"],
      ["1122334455667788", "9911223344556677"],
      ["45678", "1239"],
    ])(
      'should return false since "%s" is not a permutation of "%s"',
      (s1, s2) => {
        expect(fn(s1, s2)).toBe(false);
      }
    );
  });
});
