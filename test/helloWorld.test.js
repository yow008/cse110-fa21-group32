/**
 * File will test methods from '/src/helloWorld.js'
 */
const helloWorld = require("../source/assets/scripts/helloWorld.js");

/**
 * Basic pass test
 */
describe("helloWorld4", () => {
  it("returns hello world test 4", () => {
    expect(helloWorld()).toBe("hello world");
  });
});

/**
 * Multiple it (asserts) in one description.
 */
describe("helloWorld7", () => {
  // Should pass
  it("returns hello world test 7a", () => {
    expect(true).toBe(true);
  });
  // Should pass
  it("returns hello world test 7b", () => {
    expect(helloWorld()).toBe("hello world");
  });
});
