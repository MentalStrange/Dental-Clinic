import Review from "../models/reviewSchema.js";
import Doctors from "../models/doctorSchema.js";

export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      success: true,
      message: "the review was successfully",
      data: reviews,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// create a new review
export const createReview = async (req, res, next) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.params.userId;

  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctors.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: savedReview, data: newReview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
