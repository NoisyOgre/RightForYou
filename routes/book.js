const router = require("express").Router();
const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const fileUpload = require("../config/cloudinary");

function requireLogin(req, res, next) {
    if (req.session.currentUser) {
        next();
    }else {
        res.redirect("/login")
    }
}


//http://localhost:3000/books
router.get("/books", async (req, res) => {
    const books = await Book.find();

    console.log(books);
    res.render("books/books-list", {books});
});


//http://loacalhost:3000/books/123467
router.get("/books/:bookId", async (req, res) => {
    const bookId = await Book.findById(req.params.bookId).populate("author")
    res.render("books/book-details", bookId)
});


router.get("/create-book",requireLogin,async (req, res) => {
    const authors = await Author.find()
    res.render("books/book-create", {authors})
});

router.post("/create-book", fileUpload.single("image"), async (req, res) => {
// for post methods  we use .req.body.name of input
//req.body.title
//req.body.author
//req.body.bookID
//instead of destructuring you could also do each one individually
// let title = req.body.title
let fileUrlOnCloudinary = "";
    if(req.file){
        fileUrlOnCloudinary = req.file.path; // the path on cloudinary
    }
    const { title, author, description, rating } = req.body;
    await Book.create({
         title, 
        author, 
        description, 
        rating, 
        imageUrl: fileUrlOnCloudinary, 
    });
    res.redirect("/books");
});

router.get("/books/:bookId/edit", async (req, res) => {
    const book = await Book.findById(req.params.bookId).populate("author"); 
    const authors = await Author.find()
    res.render("books/book-edit", {book, authors});
});

router.post("/books/:bookId/edit", async (req, res) => {
    const { title, author, description, rating } = req.body;
     await Book.findByIdAndUpdate(req.params.bookId, {
        title,
        author,
        description,
        rating,
    });
    res.redirect(`/books/${req.params.bookId}`);
});



router.post("/books/:bookId/delete", async (req, res) => {
 //   const book = await Book.findById(req.params.bookId)
 //   console.log(book)
     await Book.findByIdAndRemove(req.params.bookId);
    res.redirect("/books/");
});


router.post("/reviews/:bookId/add", async(req, res) => {
    const {name, comment} = req.body
    await Book.findByIdAndUpdate(req.params.bookId, {
        $push: {reviews: {name, comment} },
    });
    res.redirect(`/books/${req.params.bookId}`);
});

module.exports = router;


//instead of outright deleting we could add a booleand isDeleted: true or false and work around that
//Delete would change the value to true and when we find the books we would pass isDeleted= false