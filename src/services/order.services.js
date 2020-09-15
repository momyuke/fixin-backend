import connsDB from '../connections/dbConn';


class OrderServices{
    async findOrderByCustomer(customer){
        let result;
        try {
            result = connsDB.collectionCustomer().find({customerId : customer.customerId}).toArray();
        } catch (error) {
            throw new Error(error.message);
        }
        return result;
    }

    async createOrder(order){
        let result;
        try {
            order.status = "WAITING FOR A TECHNICIAN COME TO MOTHERFCKN CUSTOMER"
            result = await connsDB.collectionCustomer().insertOne(order).ops[0];
        } catch (error) {
            throw new Error(error.message);
        }

        return result
    }
}

export default OrderServices;
