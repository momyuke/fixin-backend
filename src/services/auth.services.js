import connsDB from '../connections/dbConn';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


async function AuthLogin(customer){
    let result;
    try {
        const checkCustomer = await connsDB.collectionCustomer().findOne({
            $or : [{username : customer.username}, {email : customer.email}]
        });
        const checkPassword = await bcrypt.compareSync(customer.password, checkCustomer.password);

        switch(checkPassword){
            case true:
                const token  = await jwt.sign({customerId : checkCustomer.customerId,}, process.env.SECRETKEY, {expiresIn : "24h"});
                result = {
                    customerId : checkCustomer.customerId,
                    token : token
                };
            break;

            case false:
                throw new Error("Unauthorized");
            
        }
    } catch (error) {
        throw new Error(error.message);
    }
    
    return result;
    
}

export default AuthLogin;