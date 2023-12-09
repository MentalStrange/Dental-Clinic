import jwt from "jsonwebtoken";
import Doctor from "../models/doctorSchema.js";
import User from "../models/userSchema.js";

export const authenticate = async (req, res, next) => {
  // get token from headers
  const authToken = req.headers.authorization;

  // check if the token is valid
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "Token is not valid" });
  }
  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token is Expired" });
    }
    res.status(401).json({ success: false, message: error.message });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  try {
    let user;

    // Find user based on role
    if (req.role === "patient") {
      user = await User.findById(userId);
    } else if (req.role === "doctor") {
      user = await Doctor.findById(userId);
    }

    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "User not found" });
    }

    // Check if the user has the required role
    if (!roles.includes(user.role)) {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
