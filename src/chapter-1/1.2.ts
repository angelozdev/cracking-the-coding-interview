/**
 * Time: O(2n) = O(n)
 * Space: O(n)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function checkPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const s1Map = new Map<string, number>();

  for (const c of s1) {
    const currentCount = s1Map.get(c) || 0;
    s1Map.set(c, currentCount + 1);
  }

  for (const c of s2) {
    const currentCount = s1Map.get(c);
    if (!currentCount) return false;
    if (currentCount === 1) s1Map.delete(c);
    else s1Map.set(c, currentCount - 1);
  }

  return s1Map.size === 0;
}
