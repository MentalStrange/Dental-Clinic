import Doctor from "../models/doctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deleteDoctor,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleDoctor = await Doctor.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "Successfully Founded",
      data: getSingleDoctor,
    });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({}).select("-password");
    }
    res.status(200).json({
      success: true,
      message: "Successfully Founded",
      data: doctors,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
};
