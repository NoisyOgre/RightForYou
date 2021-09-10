const mongoose = require("mongoose");


const bookSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    //author: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Author",
    },
    rating: Number,
    reviews: [
      {
        name: String,
        comment: String,
      },
    ],
    imageUrl: String,
  },
  {
  timestamp: true,
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;











