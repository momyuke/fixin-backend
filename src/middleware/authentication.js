import jwt from 'jsonwebtoken';


const tokenValidation = (req,res,next) => {
    const {authorization} = req.headers;
    
    switch(authorization){
        case undefined :
            res.sendStatus(401); 
        break;
        default : 
            switch(true){
                case authorization.startsWith("Bearer ") :
                    const token = authorization.slice(7);
                    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
                        if(err){
                            res.sendStatus(401);
                        }else{
                            if(Date.now() >= decoded.exp * 1000){
                                res.status(401).send("JWT is expired");
                            }else{
                                next();
                            }
                        }
                    });
                break;
            }
    }
}

export default tokenValidation;