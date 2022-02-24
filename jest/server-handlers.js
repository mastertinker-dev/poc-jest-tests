import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get('https://reqres.in/api/products/3', (req, res, ctx) => res(ctx.status(200), ctx.json({ id: 1, title: 'you got mocked again' }))),
];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
