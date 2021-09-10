const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    brand: String,
    image_url: String,
}, {
    timestamps: true,
});




module.exports = mongoose.model("Brand", brandSchema);