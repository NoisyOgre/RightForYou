const router = require("express").Router();
const test = require("../filter.js");

const preferences = {};
const result = {};

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
  res.render("user_interface/myroutine", preferences);
});

router.get("/my-personal-routine", async (req, res) => {
  let filteredData = await test();

  /* result.cleansers = filteredData.cleansers;
  result.moisturizers = filteredData.moisturizers;
  result.sunProtection = filteredData.sunProtection;
 */

  /* console.log(filteredData.cleansers) */
  /* result.cleanserSug = filteredData.cleansers[random]; */
  /*  random = getRandomInt(300);
  result.moisturizerSug = filteredData.moisturizers[random];
  random = getRandomInt(300);
  result.sunProSug = filteredData.sunProtection[random]; */

  switch (preferences.type) {
    case "normal":
      result.type = filteredData[4];
      result.normal = true;
      break;
    case "oily":
      result.type = filteredData[0];
      result.oily = true;
      break;
    case "dry":
      result.type = filteredData[1];
      result.dry = true;
      break;
    case "combination":
      result.type = filteredData[2];
      result.combination = true;
      break;
    case "sensitive":
      result.type = filteredData[3];
      result.sensitive = true;
      break;
  }

  switch (preferences.goals) {
    case "prevention":
      result.goals = "prevention";
      break;
    case "keeping":
      result.goals = "keeping";
      break;
    case "helping":
      result.goals = "helping";
      break;
  }

  switch (preferences.time) {
    case "ten":
      result.steps = 3;
      break;
    case "thirty":
      result.steps = 6;
      break;
    case "thirtyPlus":
      result.steps = 10;
      break;
  }

  res.render("user_interface/myroutinefull", result);
});

module.exports = router;
