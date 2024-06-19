import {User} from '../db/index.js'

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const userFound = await User.findOne({
        username:username,
        password:password
    })
    
    if(userFound){
        next();
    }else{
        res.json({
            msg:"User not found" , 
            username , 
            password
        })
    }

}

export default userMiddleware;