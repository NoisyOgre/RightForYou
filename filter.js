const axios = require("axios");
let cleansers = [];
let moisturizers = [];
let toners = [];
let serums = [];
let essence = [];
let sunProtection = [];
let mask = [];
let oilySkin = [];
let drySkin = [];
let normalSkin = [];
let senSkin = [];
let comboSkin = [];

async function test() {
  let array = await axios.get("https://skincare-api.herokuapp.com/products");
  /* console.log(array); */
  const list = array.data;

  for (let i = 0; i < list.length; i++) {
    prdctName = list[i].name;

    prdctIng = list[i].ingredient_list;
    // by skin type
    worstOily.forEach((ingredient) => {
      prdctIng.includes(ingredient);
      if (!prdctIng.includes(ingredient)) {
        oilySkin.push(list[i]);
      }
    });

    worstDry.forEach((ing) => {
      prdctIng.includes(ing);
      if (!prdctIng.includes(ing)) {
        drySkin.push(list[i]);
      }
    });

    worstSensitive.forEach((i) => {
      prdctIng.includes(i);
      if (!prdctIng.includes(i)) senSkin.push(list[i]);
    });

    worstCombo.forEach((i) => {
      if (!prdctIng.includes(i)) comboSkin.push(list[i]);
    });

    bestNormal.forEach((i) => {
      if (prdctIng.includes(i)) {
        normalSkin.push(list[i]);
      }
    });
    // by product
    if (prdctName.includes("spf")) {
      sunProtection.push(list[i]);
    }

    if (prdctName.includes("clean")) {
      cleansers.push(list[i]);
    }

    if (prdctName.includes("moistur")) {
      moisturizers.push(list[i]);
    }

    if (prdctName.includes("tone")) {
      toners.push(list[i]);
    }

    if (prdctName.includes("serum")) {
      serums.push(list[i]);
    }

    if (prdctName.includes("essence")) {
      essence.push(list[i]);
    }

    if (prdctName.includes("mask")) {
      mask.push(list[i]);
    }
  }

  console.log(
    cleansers.length,
    moisturizers.length,
    toners.length,
    serums.length,
    essence.length,
    sunProtection.length,
    mask.length,
    oilySkin.length,
    drySkin.length,
    normalSkin.length,
    senSkin.length,
    comboSkin.length
  );
};

test();




/* const skincareList = skincareData.data; */

const bestOily = [
  "hyaluronic acid",
  "retinol",
  "salicylic acid",
  "niacinamide",
  "clay",
  "grapeseed oil",
  "caster oil",
];

const worstOily = [
  "mineral oil",
  "paraffinum liquidum",
  "petrolatum",
  "cera microcristallina",
  "microcystalline wax",
  "ozokerite",
  "ceresine isoparaffin",
  "paraffin",
  "synthetic wax",
  "beeswax",
  "alcohol",
];

const bestNormal = [
  "vitamin c",
  "lineleic acid",
  "alpha linoleic acid",
  "oleic acid",
  "omega-6",
  "omega-3",
  "omega-9",
  "buriti oil",
];

const bestDry = [
  "hyaluronic acid",
  "gliceryn",
  "shea butter",
  "vitamin e",
  "jojoba oil",
  "ceramides",
  "oil",
];

const worstDry = [
  "isopropyl alcohol",
  "sodium chloride",
  "sodium lauryl sulfate",
  "sodium laureth sulfate",
  "ammonium lauryl sulfate",
  "sodium tallowate",
  "cocoate",
  "salicylic acid",
  "willow bark",
  "aha acids",
];

const bestCombo = bestDry.concat(bestOily);
const worstCombo = worstDry.concat(worstOily);

const bestSensitive = [
  "laminaria saccharina",
  "edelweiss extract",
  "olea europae",
  "hydrolysed elastin",
  "vitamin e",
  "sodym hyaluronate",
];

const worstSensitive = [
  "fragrance",
  "sodium lauryl sulfates",
  "alcohol",
  "avobenzone",
  "octinoxate",
  "oxybenzone",
  "benzoyl peroxide",
  "propylene glycol",
];

const typeOfProduct = [
  "cleansing",
  "hydrating",
  "moisturizing",
  "serum",
  "essence",
  "spf",
  "exfoliator",
  "scrub",
  "mask",
  "gel",
];

function productFilter() {
  let l = skincareList.length;
  prdctName = skincareList.name;
  for (let i = 0; i < l; i++) {}
}
