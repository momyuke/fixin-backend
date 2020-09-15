

class CustomerController{
    async findCustomer(req, res, service){
        let result;
        try{
            result = await service.getAllCustomer();
            res.send(result);

        }catch(error){
            res.status(500).send({message : error.message});
        }

    }

    async createCustomer(req,res,service){
        try {
            let result = await service.createOneCustomer(req.body);
            res.send(result);
        } catch (error) {
            res.status(500).send({message : error.message});
        }
    }

    async updateCustomer(req,res,service){
        try{
            let result = await service.updateCustomer(req.body);
            res.send(result);
        }catch(error){
            res.status(500).send({message : error.message});
        }
    }

}

export default CustomerController;