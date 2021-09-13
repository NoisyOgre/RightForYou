const router = require("express").Router();

router.get("/myprofile", (req,res)=>{

res.render("user_interface/userprofile");
});

module.exports = router;