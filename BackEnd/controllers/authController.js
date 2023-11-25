import User from "./../models/userSchema.js";
import doctor from "./../models/doctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// helper functions
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};
export const register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await doctor.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ message: "User already registered" });
    }

    // hash password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hashSync(password, saltRounds);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "doctor") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;
    const patient = await User.findOne({ email });
    const doctor = await User.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // to compare password;
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Password Not Correct" });
    }

    // get token if the pass is correct
    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Successfully Login",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
