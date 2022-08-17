import { stringCompression } from "./1.6";

describe("string compression", () => {
  it.each([
    { arg: "aaa", out: "a3" },
    { arg: "bbbbbb", out: "b6" },
    { arg: "abbbbbbc", out: "a1b6c1" },
    { arg: "aaabccc", out: "a3b1c3" },
    { arg: "hhellllllllooooo!", out: "h2e1l8o5!1" },
    { arg: "woorrrllllddddd", out: "w1o2r3l4d5" },
  ])("should return a compressed string ($out)", ({ arg, out }) => {
    expect(stringCompression(arg)).toBe(out);
  });

  it.each(["a", "aa", "abc", "aabbcc", "ababababccab"])(
    "should the same string (%s)",
    (string) => {
      expect(stringCompression(string)).toBe(string);
    }
  );
});
