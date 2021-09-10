const router = require("express").Router();

router.get("/quiz", (req,res)=>{
res.render("quiz/quiz");
});

module.exports = router;