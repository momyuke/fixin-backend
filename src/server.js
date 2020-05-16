import express from 'express';
import http from 'http';
import middleware from './middleware/app-middleware';

const app = express();

app.use(middleware);

const server = http.createServer(app);

server.on('error', function(){
    process.exit(1);
});

export default server;