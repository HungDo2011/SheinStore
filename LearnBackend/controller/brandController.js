const { Brand, Product } = require("../model/model");

const brandController = {
  //Get a brand
  getABrand: async (req, res) => {
    try {
      const brand = await Brand.findById(req.params.id).populate("products");
      res.status(200).json(brand);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Get all brand
  getAllBrand: async (req, res) => {
    try {
      const brands = await Brand.find().populate("products");
      res.status(200).json(brands);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Add brand
  addBrand: async (req, res) => {
    try {
      const newBrand = new Brand(req.body);
      const savedBrand = await newBrand.save();
      res.status(200).json(savedBrand);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Update brand
  updateBrand: async (req, res) => {
    try {
      const brand = Brand.findById(req.params.id);
      await brand.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete brand

  deleteBrand: async (req, res) => {
    try {
      await Product.updateMany({ brand: req.params.id }, { brand: null });
      await Brand.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = brandController;
