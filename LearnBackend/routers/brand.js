const router = require("express").Router();

const brandController = require("../controller/brandController");

//Get Brand
router.get("/", brandController.getAllBrand);

//Get a Brand
router.get("/:id", brandController.getABrand);

//Add Brand
router.post("/post", brandController.addBrand);

//Update Brand
router.put("/:id", brandController.updateBrand);

//Delete Brand
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
