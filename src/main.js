import server from './server';
import dotenv from 'dotenv';

dotenv.config();

if(process.env.APP_NAME){
    server.listen(process.env.APP_PORT, '0.0.0.0', () => {
        console.log(`Server has been running in port ${process.env.APP_PORT}`);
    });
}