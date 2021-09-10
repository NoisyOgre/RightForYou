const router = require("express").Router();
const Author = require("../models/Author.model");


// function requireLogin(req, res, next) {
//     if (req.session.currentUser) {
//         next();
//     }else {
//         res.redirect("/login")
//     }
// }


//http://localhost:3000/create-author
router.get("/create-author", (req, res) => {
    res.render("authors/author-create")
});


router.post("/create-author", async (req, res) => {
    const { name, bio } = req.body;
    await Author.create({name,bio});
    res.redirect("/books")
});

module.exports = router;
