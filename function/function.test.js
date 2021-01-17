/* eslint-disable no-undef */
const fetchSomething = require('./function');

jest.mock('./imports/first');

test('mocking an imported function', () => {
  const res = fetchSomething();

  expect(res).toBe('I got mocked + original title 2');
});
