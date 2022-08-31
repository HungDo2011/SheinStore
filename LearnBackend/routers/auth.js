const router = require("express").Router();
const authController = require("../controller/authController");

//Register
router.post("/register", authController.registerUser);

//Login
router.get("/login", authController.loginUser);

//Refresh
router.post("/refresh", authController.refreshToken);

module.exports = router;
