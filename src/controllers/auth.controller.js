
const AuthController = async (req,res,service) =>{
    try {

        let result = await service(req.body);
        res.send(result);

    } catch (error) {

        switch(error.message){
            case "Unauthorized":
                res.status(401).send({message : error.message});
            break;

            default:
                res.status(500).send({message : error.message});
        }
    }
}

export default AuthController;