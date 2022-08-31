const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      require: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 80,
      require: true,
    },
    cart: [String],
    likeList: [String],
  },
  { timestamps: true }
);

const brandShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const productShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  codeType: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  code: {
    type: Number,
    require: true,
  },
  size: {
    type: [String],
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  promoPrice: {
    type: Number,
  },
  amount: {
    type: Number,
    require: true,
  },
  img: [
    {
      type: [String],
      require: true,
    },
  ],
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    require: true,
  },
});

let User = mongoose.model("User", userShema);
let Brand = mongoose.model("Brand", brandShema);
let Product = mongoose.model("Product", productShema);

module.exports = { Product, Brand, User };
