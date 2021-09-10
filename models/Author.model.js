const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: String,
    bio: String,
    picture: String,
}, {
    timestamps: true,
});




module.exports = mongoose.model("Author", authorSchema);