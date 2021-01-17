const { rest } = require('msw');
const { setupServer } = require('msw/node');

const handlers = [
  rest.get('https://reqres.in/api/products/3', (req, res, ctx) => res(ctx.status(200), ctx.json({ id: 1, title: 'you got mocked again' }))),
];

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

module.exports = { server, rest };
