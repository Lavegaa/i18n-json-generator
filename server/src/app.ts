import fastify, {FastifyInstance} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

server.get('/', async (request, reply) => {
    return { hello: 'world hello' }
})
  
server.listen(3000, function (err) {
if (err) throw err
server.log.info(`server listening on`)
})