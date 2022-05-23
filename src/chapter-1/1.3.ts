/**
 * N: string
 * Time: O(N)
 * Space: O(N)
 * @param {string} str
 * @returns {string}
 */
export function URLify(str: string): string {
  return str.trim().replace(/\s/g, "%20");
}
