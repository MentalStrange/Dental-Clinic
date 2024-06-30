import Review from "../models/reviewSchema.js";
import Doctors from "../models/doctorSchema.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      success: true,
      message: "The reviews were retrieved successfully",
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getReviewsByDoctorId = async (req, res) => {
  const doctorId = req.params.doctorId;
  try {
    const reviews = await Review.find({ doctor: doctorId }).populate('user', 'name photo').lean().exec();
    return res.status(200).json({ success: true, message: "Reviews retrieved successfully", data: reviews });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// create a new review
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctors.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: "Review created successfully", data: savedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
