const axios = require("axios");

const skincareData = axios.get("https://skincare-api.herokuapp.com/products");

const bestOily = ["hyaluronic acid","retinol","salicylic acid","niacinamide","clay","grapeseed oil"];

const bestNormal = ["hyaluronic acid", "gliceryn",];

const bestDry = [];

const bestCombo = [];

const bestSensitive = [];