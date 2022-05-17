import { isUnique, isUnique2 } from "./1.1";

const fns = [isUnique, isUnique2];

fns.forEach((fn) => {
  describe("isUnique", () => {
    test.each(["asdfghjkl", "a", "1234567890", "Aa"])(
      "should return true when string is %s",
      (s) => {
        expect(fn(s)).toBe(true);
      }
    );

    test.each(["aaaa", "bb", "asdfghjkla", "aasdfghjkl"])(
      "should return false when string is %s",
      (s) => {
        expect(fn(s)).toBe(false);
      }
    );
  });
});
