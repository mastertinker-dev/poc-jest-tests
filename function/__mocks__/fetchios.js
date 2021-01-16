const fetchios = jest.fn(() => {
  return ({ data: { title: 'I got mocked' } });
  console.log(22222222222222);
});

module.export = fetchios;