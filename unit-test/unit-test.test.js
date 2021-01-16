const { TestScheduler } = require('jest');
const multiplier = require('./unit-test');

const testCases = [
  { n1: 1, n2: 2, res: 2 },
  { n1: 2, n2: 4, res: 8 },
  { n1: 3, n2: 8, res: 24 },
  { n1: 4, n2: 16, res: 64 },
  { n1: 5, n2: 32, res: 160 },
  { n1: 6, n2: 64, res: 384 },
  { n1: 7, n2: 128, res: 896 },
  { n1: 8, n2: 256, res: 2048 },
  { n1: 9, n2: 512, res: 4608 },
  { n1: 10, n2: 1024, res: 10240 },
];

test('should multiply correctly', () => {
  testCases.forEach(element => {
    const result = element.n1 * element.n2;
    expect(result).toBe(element.res);
  });
  const result = multiplier(2,5);
});

