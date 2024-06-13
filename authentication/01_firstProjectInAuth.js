import express from 'express';
import jwt from "jsonwebtoken";
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "sudhanshu@gmail.com",
    password: "123",
    name: "Sudhanshu Jha",
  },
  {
    username: "anshuman@gmail.com",
    password: "123321",
    name: "Anshuman",
  },
  {
    username: "priyanshu@gmail.com",
    password: "123321",
    name: "priyanshu",
  },
];

function userExists(username, password) {
    let userPresence = false;
    for(let i =0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username===username && ALL_USERS[i].password===password){
            userPresence=true;
        }
    }
    return userPresence;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.send({user:ALL_USERS.filter(user=>user.username===username)})
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)