const router = require("express").Router();
const Product = require("../models/Product.model");
const Author = require("../models/Author.model");
const fileUpload = require("../config/cloudinary");
const axios = require("axios");

function requireLogin(req, res, next) {
    if (req.session.currentUser) {
        next();
    }else {
        res.redirect("/login")
    }
}

//http://localhost:3000/products

router.get("/products", async (req,res)=>{
const response = await axios.get("https://skincare-api.herokuapp.com/products");
/* console.log(response.data); */
res.render("products/product-list", {products: response.data});
});

router.get("/products/:id", async (req,res)=>{
    const response = await axios.get(`https://skincare-api.herokuapp.com/products/${req.params.id}`);
    console.log(response.data)
    /* const productId = await response.findById(req.params.id); */
    res.render("products/product-details", response.data);
});

router.post("/products/:id/delete", async (req, res) => {
    const response = await axios.get(`https://skincare-api.herokuapp.com/products/${req.params.id}`)
       res.redirect("/products/");
   });

   
router.get("/create-product",requireLogin,async (req, res) => {
    const brand = await Product.find()
    res.render("products/product-create", {brand})
});

router.post("/create-product", fileUpload.single("image"), async (req, res) => {

let fileUrlOnCloudinary = "";
    if(req.file){
        fileUrlOnCloudinary = req.file.path; // the path on cloudinary
    }
    const { name, brand, ingredients } = req.body;
    await Book.create({
       name, 
        brand, 
        ingredients,  
        imageUrl: fileUrlOnCloudinary, 
    });
    res.redirect("/products");
});

   



//http://localhost:3000/books
/* 

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
 */
module.exports = router;


//instead of outright deleting we could add a booleand isDeleted: true or false and work around that
//Delete would change the value to true and when we find the books we would pass isDeleted= false