// ℹ️ Connects to the database
require("../db");

const Product = require("../models/Product.model")
const products = [
    {
      brand: "amorepacific",
      name: "age spot brightening pen",
      ingredient_list: [
        "water",
        "butylene glycol",
        "alcohol",
        "dipropylene glycol",
        "peg-75",
        "glycereth-26",
        "ascorbyl glucoside",
    ],
      imageUrl: "http://placekitten.com/200/300",
    }, 
    {
      brand: "lioele",
      name: "a.c control mousse cleanser trouble hunter",
      ingredient_list: [
        "water",
        "ammonium lauryl sulfate",
        "cocamidopropyl betaine",
        "peg-8",
        "polysorbate 20",
        "salicylic acid",
        "fragrance",
        "henoxyethanol",
        "potassium hydroxide",
        "methylparaben",
        "sodium methyl cocoyl taurate",
        "sodium citrate",
        "tetrasodium edta",
        "dipotassium glycyrrhizate",
        "tocopheryl acetate",
        "benzophenone-4",
        "rose water",
        "camillia sinensis leaf extract."
    ],
      imageUrl: "http://placekitten.com/200/300",
    },
    {
      brand: "amorepacific",
      name: "bio-enzyme refining complex",
      ingredient_list: [
        "panax ginseng root extract",
        "cyclopentasiloxane",
        "dimethicone",
    ],
      imageUrl: "http://placekitten.com/200/300",
    },
  ];

Product.insertMany(products).then((productsFromDB) => {
    console.log(`products created - ${productsFromDB.length}`)
})

