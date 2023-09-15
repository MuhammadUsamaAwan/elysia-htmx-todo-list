import { Elysia, t } from 'elysia';

const app = new Elysia()
  .get('/', () => Bun.file('src/index.html'))
  .post(
    '/add',
    ({ body }) => {
      return `<li hx-delete="/delete" hx-swap="delete">${body.todo}</li>`;
    },
    {
      body: t.Object({
        todo: t.String(),
      }),
    }
  )
  .delete('/delete', () => {
    return;
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
