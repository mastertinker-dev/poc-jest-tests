import fetchSomething from './function';

jest.mock('./imports/first');

test('mocking an imported function', () => {
  const res = fetchSomething();

  expect(res).toBe('I got mocked + original title 2');
});
