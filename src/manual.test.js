import { solve } from "advent-of-code-wasm";

test('Basic functionality works', () => {
  expect(solve(2019, 1, 1, "14")).toBe("2");
});

test('Exception is thrown on bad input', () => {
  const s = () => { solve(2019, 1, 1, "bad_input"); };
  expect(s).toThrow("Line 1: invalid digit found in string");
});

test('Exception is thrown on invalid year', () => {
  const s = () => { solve(2010, 1, 1, "14"); };
  expect(s).toThrow("Unsupported year=2010, day=1, part=1");
});
