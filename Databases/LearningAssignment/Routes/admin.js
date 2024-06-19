import {Router} from 'express';
import adminMiddleware from '../middleware/admin.js';
import {Admin , Course} from '../db/index.js'

const router = Router();

router.post('/signup',(req , res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    Admin.create({
        username,
        password
    })
    .then(()=>{
        res.json({
            msg:"Admin created successfully"
        })
    })
    .catch(()=>{
        res.json({
           msg: "error occured in Admin creation"
        })
    })
})

router.post('/courses',adminMiddleware, async (req , res)=>{
    const title = req.body.title;
    const discription = req.body.title;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = await Course.create({
        title,
        discription,
        price,
        imageLink
    })
    console.log(course);
    
    res.json({
        msg:'Course created successfully', courseId:course._id , 
    })

})

router.get('/courses' ,adminMiddleware, async (req , res)=>{
    const response= await Course.find({});

    res.json({
      courses:response
    })
})


export default router;