import User from "../models/userSchema.js";

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
      data: deleteUser,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleUser = await User.findById(id);
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
  const id = req.params.id;
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "Successfully Founded",
      data: users,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};
