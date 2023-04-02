import { strict as assert } from "node:assert";
import { solve } from "advent-of-code-wasm";

assert.equal(solve(2019, 1, 1, "14"), "2");
assert.equal(solve(2019, 3, 2, "R8,U5,L5,D3\nU7,R6,D4,L4"), "30");
