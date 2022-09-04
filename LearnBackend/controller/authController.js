const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

const { User } = require("../model/model");
const refreshTokens = [];

const authController = {
  //Register
  registerUser: async (req, res) => {
    try {
      //Hash  password
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Creat user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
      });

      //Save to Database
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Generate access token
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "20s" }
    );
  },

  //Generate refresh token
  generatereFreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "30d" }
    );
  },

  //Login
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json("Không đúng email");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        res.status(404).json("Không đúng mật khẩu");
      }

      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generatereFreshToken(user);

        refreshTokens.push(refreshToken);

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: true, //set true when done!
          sameSite: "strict",
          path: "/",
        });

        const { password, ...other } = user._doc;
        return res.status(200).json({ ...other, accessToken });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Refresh token
  refreshToken: async (req, res) => {
    //Get refresh token from user
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
      return res.status(401).json("You are not authenticated!");

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid!");
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }

      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      //Create new access token, new refresh token
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generatereFreshToken(user);

      refreshTokens.push(newRefreshToken);

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true, //set true when done!
        sameSite: "strict",
        path: "/",
      });

      res.status(200).json({ accessToken: newAccessToken });
    });
  },

  //Logout
  logoutUser: async (req, res) => {
    res.clearCookie("refreshToken");

    const newRefreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );

    res.status(200).json("Logout");
  },
};

module.exports = authController;
