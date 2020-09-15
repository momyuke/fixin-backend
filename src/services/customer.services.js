import connsDB from '../connections/dbConn';
import {v4} from 'uuid';
import bcrypt from 'bcrypt';

class CustomerServices{
    async getAllCustomer(){
        let result;
        try{
            result = await connsDB.collectionCustomer().find().toArray();
                
        }catch(error){
            throw new Error(error.message);
        }

        return result;
    }

    async createOneCustomer(customer){
        let result;
        try{
            let checkUser = await connsDB.collectionCustomer().findOne({email : customer.email});
            switch(checkUser){
                case null : 
                    customer.password = await bcrypt.hashSync(customer.password, 10);
                    customer.customerId = v4();
                    result = await connsDB.collectionCustomer().insertOne(customer);
                break;

                default : 
                throw new Error("User with that email has been registered. Please type another email.");
            }
            
        }catch(error){
            throw new Error(error.message)
        }

        return result.ops[0];
    }

    async updateCustomer(customer){
        let result;
        try {
            result = await connsDB.collectionCustomer().findOneAndUpdate({customerId : customer.customerId}, {$set : customer}, {returnOriginal : false});
        } catch (error) {
            throw new Error(error.message);
        }

        return result;
    }


}

export default CustomerServices;