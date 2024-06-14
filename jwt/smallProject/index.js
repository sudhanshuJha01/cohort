import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const app = express();

const userSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

app.use(express.json());

app.post("/generate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = {
    username,
    password,
  };

  const verifyUserInput = userSchema.safeParse(user);
  if (!verifyUserInput.success) {
    res.json({
      msg: "Input is not Valid ",
    });
    return;
  }

  const token = jwt.sign(user.username, "secret");
  res.json({
    token: token,
  });
});

app.post("/decode", (req, res) => {
  const token = req.headers.authorization;

  const decodedValue = jwt.decode(token);

  res.json({
    decodedValue,
  });
});

app.post("/verify", (req, res) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, "secret");
  } catch (error) {
    res.json({
      msg: "user is not verified",
    });
    return;
  }

  res.json({
    msg: "user is varified",
  });
});

app.listen(3000, () => {
  console.log("Our server is on the PORT 3000");
});
