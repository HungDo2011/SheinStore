const { Brand, Product } = require("../model/model");

const productController = {
  //Get a product
  getAProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate("brand");
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Get all product
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().populate("brand");
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Add product
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      if (req.body.brand) {
        const brand = Brand.findById(req.body.brand);
        await brand.updateOne({ $push: { products: savedProduct._id } });
      }
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Update product
  updateProduct: async (req, res) => {
    try {
      const product = Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete product
  deleteProduct: async (req, res) => {
    try {
      await Brand.updateMany(
        { products: req.params.id },
        { $pull: { products: req.params.id } }
      );
      await Product.findByIdAndDelete(req.params.id);

      res.status(200).json("Delete Successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productController;
