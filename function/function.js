const fetchios = require("./imports/fetchios");
const sketchios = require("./imports/sketchios");

const fetchSomething = () => {
  const res1 = fetchios();
  const res2 = sketchios();
  if (res1?.data && res2?.data) {
    const output = `${res1.data.title} + ${res2.data.title}`;
    console.log(output);
    return output;
  }
};

module.exports = fetchSomething;
