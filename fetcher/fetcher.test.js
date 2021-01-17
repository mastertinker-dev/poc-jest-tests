const fetcher = require('./fetcher');

/* eslint-disable no-undef */
test('Mocking axios', async () => {
  const res = await fetcher();
  expect(res).toBe('you got mocked again');
});
