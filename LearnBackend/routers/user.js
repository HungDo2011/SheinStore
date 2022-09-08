const router = require("express").Router();

const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");

//Get all user
router.get(
  "/get-all",
  middlewareController.verifyToken,
  userController.getAllUser
);

//Get an user
router.get("/:id", userController.getAnUser);

//Delete user
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
