import { Router } from "express";
import userMiddleware from "../middleware/user.js";
import { User, Course } from "../db/index.js";

const router = Router();

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  })
    .then(() => {
      res.json({
        msg: "User created successfully",
      });
    })
    .catch(() => {
      res.json({
        msg: "some error has occured",
      });
    });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
  
    User.updateOne(
      { username },
      { "$push": { purchased: courseId } }
    )
      .then(() => {
        res.json({ message: "Course has been added" });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({ error: "An error occurred while adding the course" });
      });
  });
  

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    })

    console.log(user.purchased);

    const courses = await Course.find({
        _id:{
            "$in":user.purchased
        }
    })
    console.log(courses);

    res.json({
        courses
    })
    
    
});

export default router;
