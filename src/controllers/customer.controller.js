

class CustomerController{
    async findCustomer(req, res, service){
        let result;
        try{
            result = await service.getAllCustomer();
        res.send(result);

        }catch(err){
            res.status(500).send({message : err.message});
        }

    }
}

export default CustomerController;