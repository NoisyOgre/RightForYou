const router = require("express").Router();
const test = require("../filter.js");

const preferences = {
}

router.get("/quiz1", (req, res) => {
  res.render("quiz/quiz");
});

router.post("/quiz1", (req, res) => {
  const { experience, goals, time, routine } = req.body;
  preferences.experience = experience;
  preferences.goals = goals;
  preferences.time = time;
  preferences.routine = routine;
  /* console.log(experience,goals,time,routine); */

  res.redirect("/quiz2");
});

router.get("/quiz2", (req, res) => {
  res.render("quiz/skintype");
});

router.post("/quiz2", (req, res) => {
  const { type } = req.body;
  preferences.type = type;

  res.redirect("/quiz3");
});

router.get("/quiz3", (req, res) => {
  res.render("quiz/budget");
});

router.post("/quiz3", (req, res) => {
  const { budget } = req.body;
  preferences.budget = budget;
  test();
  res.render("user_interface/myroutine", preferences);
});

module.exports = router;
