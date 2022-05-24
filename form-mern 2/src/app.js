const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const { json } = require("express/lib/response");
require("./db/conn");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const { db } = require("./models/userModel");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
// const views_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
// app.set("view engine", "hbs")
// app.set('views', views_path);
// hbs.registerPartials(partials_path);
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/", async (req, res) => {
  try {
    // console.log(req.body.user_email);
    // const newId = users[users.length - 1].id + 1;
    const newUser = new User({
      name: req.body.user_name,
      email: req.body.user_email || "temp@gmail.com",
      password: req.body.user_password,
    });
    const userRegistered = await newUser.save().then(() => {
      console.log("successfully entered user");
    });
    res.status(201).render(`${__dirname}/../public/success`);
  } catch (err) {
    res.status(400).send(err);
  }

  // User.create(data);
  // console.log(req.body);
  // db.collection("users").insertOne(req.body, function (err, collection) {
  //   if (err) throw err;
  //   console.log("Record inserted Successfully");
  // });
  // return res.redirect("success.html");
  // try {
  //   const name = req.body.user_name;
  //   const email = req.body.user_email;
  //   const pass = req.body.user_password;

  //   const data = {
  //     user_name: name,
  //     user_email: email,
  //     user_password: pass,
  //   };
  //   console.log(data);
  //   const newUser =  User.create(data);

  //   res.status(201).json({
  //     status: 'success',
  //     data: {
  //       user: newUser,
  //     },
  //   });
  // } catch (err) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: err,
  //   });
  // }
});

app.listen(port, () => {
  console.log(`listen from port number ${port}`);
});
