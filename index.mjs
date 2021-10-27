import { config } from "dotenv";
config();
import express from "express";
import bcrypt from "bcryptjs";

import { Balu } from "./Models/User.mjs";
const app = express();

const PORT = process.env.PORT || 3000;

import dbConnection from "./utils/dbConnection.mjs";

// MiddleWare
app.use(express.json());
dbConnection();

app.post("/register", async (req, res) => {
  console.log("register");
  console.log(req.body);

  const { email, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, 12);
  console.log(hashPassword);

  const user = await Balu.create({
    email: email,
    password: hashPassword,
  });

  console.log(user);

  res.status(200).json({ data: user });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Balu.find({ email: email });
    console.log(user, password);
    if (bcrypt.compareSync(password, user.password)) {
      console.log("Sucess");
    } else {
      console.log("fails");
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`App running in Port ${PORT}`);
});
