const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Fill in username and password",
    });
    return;
  }

  const user = await User.findOne({ username });
  if (user !== null) {
    // found user, already exists
    res.render("auth/signup", { errorMessage: "User already exists" });
    return;
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({
    username,
    password: hashedPassword,
  });
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.render("auth/login", { errorMessage: "Fill in username and password" });
    return;
  }

  const user = await User.findOne({ username });
  if (user === null) {
    //if user does not exist in database
    res.render("auth/login", { errorMessage: "invalid login" });
    return;
  }

  if (bcrypt.compareSync(password, user.password)) {
    //passwords match - login successful
    req.session.currentUser = user;
    res.redirect("/");
  } else {
    res.render("auth/login", { errorMessage: "invalid login" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
