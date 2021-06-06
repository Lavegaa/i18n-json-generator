import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import dbConnection from './plugins/dbConnection'
import routes from './routes/routes'
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify()

server.register(dbConnection)
server.register(routes)
server.register(require('fastify-cors'), {
  // put your options here
})

server.get('/', async (request, reply) => {
  return { hello: 'world hello' }
})

server.listen(3000, function (err) {
  if (err) throw err
  server.log.info(`server listening on`)
})
