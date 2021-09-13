const axios = require("axios");

const skincareData = axios.get("https://skincare-api.herokuapp.com/products");

const oilySkin = ["hyaluronic acid","retinol","salicylic acid","niacinamide","clay","grapeseed oil"];

const normalSkin = [];

const drySkin = [];

const combinationSkin = [];

const sensitiveSkin = [];