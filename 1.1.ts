import { argv } from "process";

let steps = 0;
function isUnique(s: string) {
  const dic = new Map();
  for (const c of s) {
    steps++;
    if (!dic.has(c)) {
      dic.set(c, false);
      continue;
    }
    return false;
  }

  return true;
}

// time: O(n)
// space: O(n)
console.log(isUnique(argv[2]), steps);
