const fetchios = require("../fetchios");

const fetchSomething = async () => {
  const res = fetchios();
  if (res && res.data) return res;
};

module.exports = fetchSomething;
