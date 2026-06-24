const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../server.json'); // Caminho para o seu arquivo de dados
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Reescreve as rotas para a Vercel entender que /api/* deve ir para o json-server
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));
server.use(router);

module.exports = server;