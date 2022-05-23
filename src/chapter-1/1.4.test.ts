import { palindromePermutation } from "./1.4";

describe("palindromePermutation", () => {
  it.each([
    "Tact Coa",
    "seres",
    "darra",
    "es ser agil ligar",
    "La ruta natural",
  ])(
    "should return true when the string is a permutation of a palindrome",
    (str) => {
      expect(palindromePermutation(str)).toBe(true);
    }
  );

  it.each(["asdfgh", "Hola mundo", "Hello World", "permutation"])(
    "should return false when the string is not a permutation of a palindrome",
    (str) => {
      expect(palindromePermutation(str)).toBe(false);
    }
  );
});
