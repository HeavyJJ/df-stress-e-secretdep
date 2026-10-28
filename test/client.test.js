import test from "node:test";
import assert from "node:assert/strict";
import { token } from "../src/client.js";
test("token is read from the environment", () => {
  assert.equal(token(), "secret-abc");
  const previous = process.env.WIDGET_TOKEN;
  process.env.WIDGET_TOKEN = "env-token";
  try {
    assert.equal(token(), "env-token");
  } finally {
    if (previous === undefined) {
      delete process.env.WIDGET_TOKEN;
    } else {
      process.env.WIDGET_TOKEN = previous;
    }
  }
});
