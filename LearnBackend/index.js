const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

const authRoute = require("./routers/auth");
const userRoute = require("./routers/user");
const brandRoute = require("./routers/brand");
const productRoute = require("./routers/product");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(morgan("common"));
app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));

//Connect Database

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connect to database");
});

//Add Routes
app.use("/api/auth", authRoute);

app.use("/api/user", userRoute);

app.use("/api/brand", brandRoute);

app.use("/api/product", productRoute);

//Authentication
//Authorization

app.listen(8000, () => {
  console.log("Running");
});
