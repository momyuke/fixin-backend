import connsDB from '../connections/dbConn';


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
}

export default CustomerServices;