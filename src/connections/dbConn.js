import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connsDB = new MongoClient("mongodb://localhost:27017/fixin", {
    useNewUrlParser: true,
    useUnifiedTopology : true
});


const conns = {
    async connection(){
        await connsDB.connect();
    },

    getMongoClient(){
        return connsDB;
    },

    collectionCustomer(){
        return connsDB.db("fixin").collection("customer");
    }
}

export default conns;


