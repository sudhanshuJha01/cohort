// Middleware for handling auth
import {Admin} from '../db/index.js'

async function adminMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const adminFound = await Admin.findOne({
        username:username,
        password:password
    })
    
    if(adminFound){
        next();
    }else{
        res.json({
            msg:"Admin not found"
        })
    }

}

export default adminMiddleware;