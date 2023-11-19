import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview = async (e) => {
    e.preventDefault();
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
          ></textarea>
        </div>
        <button className="btn" type="submit" onClick={handleSubmitReview}>
          Submit Feedback
        </button>
      </form>
    </>
  );
}

export default FeedbackForm;
