const fetchSomething = require("./function");

jest.mock("./imports/fetchios");

test("mocking an imported function", () => {
  const res = fetchSomething();

  expect(res).toBe("I got mocked + original title 2");
});
