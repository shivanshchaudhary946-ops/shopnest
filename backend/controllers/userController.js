import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Register User
export const registerUser = async (req, res) => {
  try {

    // Data frontend/Postman se aayega
    const { name, email, password } = req.body;

    // Check email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Generate Salt
    const salt = await bcrypt.genSalt(10);

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, salt);

    // New user create
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
// Login User
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      message: "Login Successful",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};