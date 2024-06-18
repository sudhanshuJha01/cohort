import {User} from '../db/index.js'

function userMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username:username,
        password:password
    }).then((value)=>{
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"User does not exist"
            })
        }
    })

}
export default userMiddleware;