import { sum } from "../lib/helper";

describe("summary function", () => {
  test("should sum two paramaters", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("should false", () => {
    expect(sum(1, 3)).not.toBe(3);
  });
});
