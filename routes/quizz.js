const router = require("express").Router();
const test = require("../filter.js");

let preferences = {};
let result = {};

router.get("/quiz1", (req, res) => {
  res.render("quiz/quiz");
});

router.post("/quiz1", (req, res) => {
  result = {};
  preferences = {};
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
  result.counter = [1, 2, 3];
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
    case "Normal":
      result.type = filteredData[4];
      result.normal = true;
      break;
    case "Oily":
      result.type = filteredData[0];
      result.oily = true;
      break;
    case "Dry":
      result.type = filteredData[1];
      result.dry = true;
      break;
    case "Combination":
      result.type = filteredData[2];
      result.combination = true;
      break;
    case "Sensitive":
      result.type = filteredData[3];
      result.sensitive = true;
      break;
  }

  switch (preferences.goals) {
    case "Prevention":
      result.prevention = true;
      break;
    case "Keeping":
      result.keeping = true;
      break;
    case "Helping":
      result.helping = true;
      break;
  }

  switch (preferences.time) {
    case "ten":
      result.ten = true;
      result.thirty = false;
      break;
    case "thirty":
      result.thirty = true;
      break;
    case "thirtyPlus":
      result.thirtyPlus = true;
      break;
  }

  res.render("user_interface/myroutinefull", result);
});

module.exports = router;
