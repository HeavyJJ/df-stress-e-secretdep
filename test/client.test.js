import test from "node:test";
import assert from "node:assert/strict";
import { token } from "../src/client.js";
test("token is read from the environment", () => {
  assert.equal(token(), "secret-abc");
});
