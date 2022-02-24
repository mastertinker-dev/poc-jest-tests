import fetcher from './fetcher';

test('Mocking axios', async () => {
  const res = await fetcher();
  expect(res).toBe('you got mocked again');
});
