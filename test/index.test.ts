import plus from "../src";

describe("test case", function () {
  test("a + b", () => {
    expect(plus(1, 2)).toBe(3);
  });
});
