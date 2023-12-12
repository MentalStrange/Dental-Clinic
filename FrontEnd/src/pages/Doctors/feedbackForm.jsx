import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/loader/loading";
import { BASE_URL } from "../../../config";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  // const doctorId = useParams("id").id;
  // const cleanedDoctorId = doctorId
  //   ? doctorId.replace(/[^a-zA-Z0-9_]/g, "")
  //   : "";
  // const userObjectString = localStorage.getItem("user");
  // const userObject = JSON.parse(userObjectString);
  // const userId = userObject._id;

  // console.log(userId, cleanedDoctorId);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewText: reviewText,
          rating: rating,
        }),
      });
      console.log(res);

      if (!res.ok) {
        const errorMessage = await res.text();
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      const { message } = await res.json();
      toast.success(message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form action="">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 ">
          How would you rate the overall experience.
        </h3>
        <div className="gap-1 flex">
          {[...Array(5).keys()].map((_, index) => {
            index + 1;
            return (
              <>
                <button
                  key={index}
                  type="button"
                  onClick={() => setRating(index)}
                  className={`${
                    index <= ((rating && hover) || hover)
                      ? "text-yellowColor"
                      : "text-gray-400"
                  } bg-transparent border border-none outline-none  text-[22px] cursor-pointer`}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span>
                    <AiFillStar />
                  </span>
                </button>
              </>
            );
          })}
        </div>

        <div className="mt-[30px] ">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 ">
            Share Your Feedback
          </h3>
          <textarea
            rows="5"
            className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
            placeholder="Write Your Feedback"
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button className="btn" type="submit" onClick={handleSubmitReview}>
          {loading ? <Loading /> : "Submit Feedback"}
        </button>
      </form>
    </>
  );
}

export default FeedbackForm;
