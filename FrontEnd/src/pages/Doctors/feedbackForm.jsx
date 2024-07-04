/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
import Loading from "../../components/loader/loading";
import { BASE_URL, token } from "../../../config";
import { useParams } from "react-router-dom";

function FeedbackForm({ onNewReview }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id: doctorId } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          reviewText: reviewText,
          rating: rating,
          doctor: doctorId,
          user: user._id,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        toast.error(result.message);
        throw new Error(result.message);
      }

      const { message, data: review } = result; // Extract review from result.data
      toast.success(message);
      onNewReview(review);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitReview}>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div className="gap-1 flex">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                className={`${
                  starValue <= (hover || rating) ? "text-yellowColor" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>

        <div className="mt-[30px]">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            Share Your Feedback
          </h3>
          <textarea
            rows="5"
            className="border border-solid border-[#0066ff34] focus:outline-none outline-primaryColor w-full px-4 py-3 rounded-md"
            placeholder="Write Your Feedback"
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? <Loading color="white" /> : "Submit Feedback"}
        </button>
      </form>
    </>
  );
}

export default FeedbackForm;
