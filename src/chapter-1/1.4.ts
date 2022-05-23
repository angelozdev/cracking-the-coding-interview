/**
 * Time: O(2N) = O(N)
 * Space: O(N)
 * @param {string} str
 * @return {boolean}
 */
export function palindromePermutation(str: string): boolean {
  const charts = new Map<string, number>();
  let countOdd = 0;

  for (const char of str) {
    if (char === " ") continue;
    const loweredChart = char.toLowerCase();
    const count = (charts.get(loweredChart) || 0) + 1;
    charts.set(loweredChart, count);
  }

  charts.forEach((c) => {
    if (c % 2 === 1) countOdd++;
  });

  return countOdd <= 1;
}
