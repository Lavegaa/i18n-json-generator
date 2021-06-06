const testSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'projectid', 'transkey'],
        properties: {
          id: { type: 'string' },
          projectid: { type: 'string' },
          transkey: { type: 'string' },
          ko: { type: 'string' },
        },
      },
    },
  },
}

async function routes(fastify: any, options: any) {
  //Access our client instance value from our decorator
  const client = fastify.db.client
  fastify.get(
    '/test',
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { rows } = await client.query('SELECT * FROM translation')
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )
}
export default routes
