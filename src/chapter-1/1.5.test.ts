import { oneWay } from "./1.5";

describe("One Way", () => {
  it.each([
    ["pale", "pales"],
    ["angelo", "hangelo"],
    ["aileen", "ailleen"],
  ])("should return true when insert only one character", (str1, str2) => {
    expect(oneWay(str1, str2)).toBe(true);
  });

  it.each([
    ["angelo", "ngelo"],
    ["pale", "ple"],
  ])("should return true when remove only one character", (str1, str2) => {
    expect(oneWay(str1, str2)).toBe(true);
  });

  it.each([
    ["pale", "bale"],
    ["melina", "meline"],
  ])("should return true when replace only one character", (str1, str2) => {
    expect(oneWay(str1, str2)).toBe(true);
  });

  it.each([
    ["pale", "bake"],
    ["asdfg", "asdgh"],
  ])("should return false when there are more than one edit", (str1, str2) => {
    expect(oneWay(str1, str2)).toBe(false);
  });
});
