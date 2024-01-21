import { usermodel } from "../models/user.js";
import bcrypt from "bcrypt";
import { setcookie } from "../util/features.js";
import errorhandler from "../middlewares/error.js"

export const getalluser = () => {};

export const register = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
  let user = await usermodel.findOne({ email });

  if(user) return next(new errorhandler("User already exist",404))

  const hashedpaswd = await bcrypt.hash(password, 10);

  user = await usermodel.create({
    name,
    email,
    password: hashedpaswd,
  });

  setcookie(res, user, "Registered successfully", 201);
  } catch (error) {
    next(error)
  }
};

export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;
  const user = await usermodel.findOne({ email }).select("+password");
  if(!user) return next(new errorhandler("No user found",404))

  const ismatch = await bcrypt.compare(password, user.password);
  if(!ismatch) return next(new errorhandler("Invalid email or password",401))


  setcookie(res, user, `welcome back ${user.name}`, 200);
  } catch (error) {
    next(error)
  }
};

export const getprofile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      httpOnly:true,
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: "true",
    });
};
