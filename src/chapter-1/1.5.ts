export function oneWay(str1: string, str2: string): boolean {
  // replacing a character
  if (str1.length === str2.length) {
    let changesCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) changesCount++;
    }

    return changesCount <= 1;
  }

  // inserting a character
  else if (str1.length === str2.length + 1) {
    return getIfThereIsOnlyOneInsert(str1, str2);
  }

  // removing a character
  else if (str1.length + 1 === str2.length) {
    return getIfThereIsOnlyOneInsert(str2, str1);
  }

  return false;
}

const getIfThereIsOnlyOneInsert = (s1: string, s2: string): boolean => {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i + count] !== s2[i]) count++;
  }

  return count <= 1;
};
