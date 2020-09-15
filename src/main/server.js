import express from 'express';
import http from 'http';
import middleware from '../middleware/app-middleware';
import routes from '../routes/main.routes';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(middleware);
app.use(routes);

const server = http.createServer(app);

server.on('error', function(){
    process.exit(1);
});

export default server;