const router = require("express").Router();

const productController = require("../controller/productController");
// Get Product
router.get("/get-all-product", productController.getAllProduct);

// Get Product
router.get("/:id", productController.getAProduct);

//Add A Product
router.post("/post", productController.addProduct);

//Update A Product
router.put("/:id", productController.updateProduct);

//Delete A Product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
