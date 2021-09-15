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
  result.cleansers = filteredData.cleansers;
  result.moisturizers = filteredData.moisturizers;
  result.sunProtection = filteredData.sunProtection;

  switch (preferences.type) {
    case "normal":
      result.type = filteredData.normalSkin;
      break;
    case "oily":
      result.type = filteredData.oilySkin;
      break;
    case "dry":
      result.type = filteredData.drySkin;
      break;
    case "combination":
      result.type = filteredData.comboSkin;
      break;
    case "sensitive":
      result.type = filteredData.senSkin;
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
      result.toners = filteredData.toners;
      result.serums = filteredData.serums;
      result.essence = filteredData.essence;
      break;
    case "thirtyPlus":
      result.steps = 10;
      result.mask = filteredData.mask;
      break;
  }

  res.render("user_interface/myroutinefull", result);
  
});

module.exports = router;
