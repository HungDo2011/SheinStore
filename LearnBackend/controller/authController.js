const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../model/model");

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
      { expiresIn: "30s" }
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
      const user = await User.findOne({ user: req.body.email });
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

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false, //set true when done!
          sameSite: "strict",
          path: "/",
        });

        const { password, ...other } = user._doc;
        res.status(200).json({ ...other, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Refresh token
  refreshToken: async (req, res) => {
    //Get refresh token from user
    const refreshToken = res.cookie.refreshToken;
    if (!refreshToken)
      return res.status(401).json("You are not authenticated!");

    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }
      //Create new access token, new refresh token
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generatereFreshToken(user);
      await refreshToken.save()

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false, //set true when done!
        sameSite: "strict",
        path: "/",
      });


      res.status(200).json({ accessToken: newAccessToken });
    });
  },
};

module.exports = authController;
