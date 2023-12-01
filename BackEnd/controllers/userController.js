import User from "../models/userSchema.js";
import Booking from "../models/bookingSchema.js";
import Doctor from "../models/doctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleUser = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "Successfully Founded",
      data: getSingleUser,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Successfully Founded",
      data: users,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const { password, ...rest } = user._doc;
    res
      .status(200)
      .json({
        success: true,
        message: "User Found Successfully",
        data: { ...rest },
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyAppointment = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });

    const doctorIds = bookings.map((booking) => booking.doctorId);

    const doctors = await Doctor.find({ _id: { $id: doctorIds } }).select(
      "-password"
    );

    res
      .status(200)
      .json({
        success: true,
        message: "appointment are founded",
        data: { doctors },
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
