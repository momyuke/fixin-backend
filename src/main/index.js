import server from './server';
import dotenv from 'dotenv';
import connsDB from '../connections/dbConn';

dotenv.config();

if(process.env.APP_NAME){
    connsDB.connection().then(() => {
        if(connsDB.getMongoClient().isConnected()){
            server.listen(process.env.APP_PORT, '0.0.0.0', () => {
                console.log(`Server has been running in port ${process.env.APP_PORT}`);
            });
        }
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    });
    
}else{
    console.log("You have to input a name for your app on .env file");
    process.exit(1);
}