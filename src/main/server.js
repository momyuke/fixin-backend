import express from 'express';
import http from 'http';
import middleware from '../middleware/app-middleware';
import routes from '../routes/main.routes';

const app = express();

app.use(middleware);
app.use(routes);

const server = http.createServer(app);

server.on('error', function(){
    process.exit(1);
});

export default server;