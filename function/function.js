const first = require('./imports/first');
const second = require('./imports/second');

const fetchSomething = () => {
  const res1 = first();
  const res2 = second();
  if (res1?.data && res2?.data) {
    const output = `${res1.data.title} + ${res2.data.title}`;
    return output;
  }
  return null;
};

module.exports = fetchSomething;
