function checkPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const dict: Record<string, number> = {};

  for (const c of s1) {
    if (c in dict) {
      dict[c]++;
      continue;
    }

    dict[c] = 1;
  }

  for (const c of s2) {
    if (!(c in dict)) return false;
    dict[c]--;
    if (dict[c] < 0) return false;
  }

  return true;
}

// time: O(2n) = O(n)
// space: O(n)
console.log(checkPermutation("aaab", "bbba"));
console.log(checkPermutation("angelo", "logean"));
console.log(checkPermutation("aaaa", "aaaa"));
