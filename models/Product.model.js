const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
  {
    brand: String,
    name: String,
    ingredient_list: Array,
    imageUrl: String,
    comments: [
      {
        name: String,
        comment: String,
      }
    ]
  },
  {
  timestamp: true,
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;











