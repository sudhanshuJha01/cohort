import {Admin} from '../db/index.js'

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const adminFound = await Admin.findOne({
        username:username,
        password:password
    })
    
    if(adminFound){
        next();
    }else{
        res.json({
            msg:"Admin not found" , 
            username , 
            password
        })
    }

}

export default adminMiddleware;