import { isUnique, isUnique2 } from "./1.1";

const fns = [isUnique, isUnique2];

fns.forEach((fn) => {
  describe("isUnique", () => {
    test.each([
      "abcdefghi",
      "jklpoiuqwerzxcvmnsadf",
      "1234567890",
      "AaBbCcDdeFg1234567890(*&^%$#@!)",
    ])("should return true when string is %s", (s) => {
      expect(fn(s)).toBe(true);
    });

    test.each([
      "abcadef",
      "aaaaaaaaaa",
      "abcdefghijklmnopqrstuvwxyza",
      "1234567890asdklf1",
      "!@#$%^&*()(*#($&#(*$&#*($&#()))))",
    ])("should return false when string is %s", (s) => {
      expect(fn(s)).toBe(false);
    });
  });
});
