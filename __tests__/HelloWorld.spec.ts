import { HelloWorld } from "../src";

describe("HelloWorld", () => {
  it("should return 'hello world'", () => {
    expect(HelloWorld()).toBe("hello world");
  })
});