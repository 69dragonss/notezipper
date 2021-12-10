const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

router.route("/").post(registerUser);
// router.post('/',(req,res)=>{
//     res.send(registerUser)
// })

module.exports = router;
