const fetchSomething = require('./function');

test('mocking an imported function', async() => {
  const res = fetchSomething();

  expect(res?.data?.title).toBe('I got mocked');
});
