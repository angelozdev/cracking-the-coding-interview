/**
 * Time: O(n)
 * Space: O(n)
 * @param {string} s
 * @returns {boolean}
 */
export function isUnique(s: string): boolean {
  const charts = new Set();
  for (const c of s) {
    if (!charts.has(c)) {
      charts.add(c);
      continue;
    }
    return false;
  }

  return true;
}

/**
 * Time: O(N log N)
 * Space: O(N)
 * @param {string} s
 * @returns {boolean}
 */
export function isUnique2(s: string): boolean {
  const sortedString = s.split("").sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < s.length; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      return false;
    }
  }

  return true;
}
