
class OrderController{
    async getOrder(req,res,services){
        try {
            let result = services.findOrderByCustomer(req.query);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async createOrder(req,res,services){
        try {
            let result = services.createOrder(req.body);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default OrderController;