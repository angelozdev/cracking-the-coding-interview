import { URLify } from "./1.3";

describe(`URLify`, () => {
  it.each([
    "nospaces",
    " ",
    "   ",
    " firstSpace",
    "lastSpace ",
    "  surroundedBySpaces  ",
    "middle  spaces",
    " l o t s   o f   s p a c e ",
    "http://www.google.com/",
    "http://www.google.com/search?q=something really really funny",
  ])("should replace all spaces of '%s' with %20", (str) => {
    expect(URLify(str)).toBe(str.trim().replace(/\s/g, "%20"));
  });
});
