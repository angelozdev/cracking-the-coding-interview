/**
 * Time: O(N)
 * Space: O(N)
 * @param {string} s
 * @return {string}
 */
export function stringCompression(s: string): string {
  let compressed = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const nextChar = s.charAt(i + 1);
    const currentChar = s.charAt(i);
    count++;

    if (nextChar !== currentChar) {
      compressed += currentChar + count;
      count = 0;
    }
  }

  if (compressed.length >= s.length) return s;
  return compressed;
}
