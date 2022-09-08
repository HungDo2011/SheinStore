const router = require("express").Router();
const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");

//Register
router.post("/register", authController.registerUser);

//Login
router.post("/login", authController.loginUser);

//Refresh
router.post("/refresh", authController.refreshToken);

//Logout
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.logoutUser
);

module.exports = router;
