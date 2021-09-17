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

    worstSensitive.forEach((ing) => {
      prdctIng.includes(ing);

      if (!prdctIng.includes(ing)) {
        senSkin.push(list[i]);
      }
    });

    comboSkin = oilySkin.concat(drySkin);

    normalSkin = comboSkin.concat(senSkin);
  }
  // by product for each skintype
  const oily = {};
  cleansersOily = [];
  moisturizersOily = [];
  tonersOily = [];
  serumsOily = [];
  essenceOily = [];
  sunProtectionOily = [];
  maskOily = [];

  for (i = 0; i < oilySkin.length; i++) {
    prdctName = oilySkin[i].name;

    if (prdctName.includes("spf")) {
      sunProtectionOily.push(oilySkin[i]);
    }

    if (prdctName.includes("clean")) {
      cleansersOily.push(oilySkin[i]);
    }

    if (prdctName.includes("moistur")) {
      moisturizersOily.push(oilySkin[i]);
    }

    if (prdctName.includes("tone")) {
      tonersOily.push(oilySkin[i]);
    }

    if (prdctName.includes("serum")) {
      serumsOily.push(oilySkin[i]);
    }

    if (prdctName.includes("essence")) {
      essenceOily.push(oilySkin[i]);
    }

    if (prdctName.includes("mask")) {
      maskOily.push(oilySkin[i]);
    }
  }

  oily.cleansers = cleansersOily;
  oily.moisturizers = moisturizersOily;
  oily.toners = tonersOily;
  oily.serums = serumsOily;
  oily.essence = essenceOily;
  oily.sunProtection = sunProtectionOily;
  oily.mask = maskOily;

  const dry = {};
  cleansersDry = [];
  moisturizersDry = [];
  tonersDry = [];
  serumsDry = [];
  essenceDry = [];
  sunProtectionDry = [];
  maskDry = [];

  for (i = 0; i < drySkin.length; i++) {
    prdctName = drySkin[i].name;

    if (prdctName.includes("spf")) {
      sunProtectionDry.push(drySkin[i]);
    }

    if (prdctName.includes("clean")) {
      cleansersDry.push(drySkin[i]);
    }

    if (prdctName.includes("moistur")) {
      moisturizersDry.push(drySkin[i]);
    }

    if (prdctName.includes("tone")) {
      tonersDry.push(drySkin[i]);
    }

    if (prdctName.includes("serum")) {
      serumsDry.push(drySkin[i]);
    }

    if (prdctName.includes("essence")) {
      essenceDry.push(drySkin[i]);
    }

    if (prdctName.includes("mask")) {
      maskDry.push(drySkin[i]);
    }
  }

  dry.cleansers = cleansersDry;
  dry.moisturizers = moisturizersDry;
  dry.toners = tonersDry;
  dry.serums = serumsDry;
  dry.essence = essenceDry;
  dry.sunProtection = sunProtectionDry;
  dry.mask = maskDry;

  const combo = {
    oily: oily,
    dry: dry,
  };

  const sensitive = {};
  cleansersSen = [];
  moisturizersSen = [];
  tonersSen = [];
  serumsSen = [];
  essenceSen = [];
  sunProtectionSen = [];
  maskSen = [];

  for (i = 0; i < senSkin.length; i++) {
    prdctName = senSkin[i].name;

    if (prdctName.includes("spf")) {
      sunProtectionSen.push(senSkin[i]);
    }

    if (prdctName.includes("clean")) {
      cleansersSen.push(senSkin[i]);
    }

    if (prdctName.includes("moistur")) {
      moisturizersSen.push(senSkin[i]);
    }

    if (prdctName.includes("tone")) {
      tonersSen.push(senSkin[i]);
    }

    if (prdctName.includes("serum")) {
      serumsSen.push(senSkin[i]);
    }

    if (prdctName.includes("essence")) {
      essenceSen.push(senSkin[i]);
    }

    if (prdctName.includes("mask")) {
      maskSen.push(senSkin[i]);
    }
  }

  sensitive.cleansers = cleansersSen;
  sensitive.moisturizers = moisturizersSen;
  sensitive.toners = tonersSen;
  sensitive.serums = serumsSen;
  sensitive.essence = essenceSen;
  sensitive.sunProtection = sunProtectionSen;
  sensitive.mask = maskSen;

  const normal = {};
  cleansersNor = [];
  moisturizersNor = [];
  tonersNor = [];
  serumsNor = [];
  essenceNor = [];
  sunProtectionNor = [];
  maskNor = [];

  for (i = 0; i < normalSkin.length; i++) {
    prdctName = normalSkin[i].name;

    if (prdctName.includes("spf")) {
      sunProtectionNor.push(normalSkin[i]);
    }

    if (prdctName.includes("clean")) {
      cleansersNor.push(normalSkin[i]);
    }

    if (prdctName.includes("moistur")) {
      moisturizersNor.push(normalSkin[i]);
    }

    if (prdctName.includes("tone")) {
      tonersNor.push(normalSkin[i]);
    }

    if (prdctName.includes("serum")) {
      serumsNor.push(normalSkin[i]);
    }

    if (prdctName.includes("essence")) {
      essenceNor.push(normalSkin[i]);
    }

    if (prdctName.includes("mask")) {
      maskNor.push(normalSkin[i]);
    }
  }

  normal.cleansers = cleansersNor;
  normal.moisturizers = moisturizersNor;
  normal.toners = tonersNor;
  normal.serums = serumsNor;
  normal.essence = essenceNor;
  normal.sunProtection = sunProtectionNor;
  normal.mask = maskNor;

  filteredData = [oily, dry, combo, sensitive, normal];

  console.log("The data has been filtered successfully!");
  /* console.log(filteredData); */

  return filteredData;
}

<<<<<<< HEAD

=======
/* test(); */
>>>>>>> ac6c46cd08fda699079c14c6a4da04210615cdf4
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

module.exports = test;
