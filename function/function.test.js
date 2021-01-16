const fetchSomething = require("./function");

jest.mock("./function");

test("mocking an imported function", async () => {
  const res = await fetchSomething();

  expect(res.data.title).toBe("I got mocked");
});
