import { useEffect, useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./feedbackForm";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import Loading from "../../components/loader/loading";
import Error from "../../components/error/error";

function DoctorFeedback() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const doctor = useParams();
  const { data, error, loading } = useFetchData(`${BASE_URL}/doctors/${doctor.id}/reviews`);

  // Update reviews state when data is fetched
  useEffect(() => {
    if (data) setReviews(data);
  }, [data]);

  const handleNewReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setShowFeedbackForm(false); // Hide the form after submission
  };

  return (
    <>
      <div>
        <div className="mt-[50px]">
          {loading && !error && <Loading />}
          {error && !loading && <Error errorMessage={error} />}
          {!loading && !error && (
            <>
              <h4 className=" text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]  ">
                {reviews.length} Reviews{" "}
              </h4>
              {reviews.map((review) => (
                <div key={review._id} className="flex justify-between gap-10 mb-[30px] ">
                  <div className="flex gap-3 ">
                    <figure className="w-14 h-14 rounded-full">
                      <img src={review.user.photo} alt="" className="w-[50px] h-[50px] rounded-full" />
                    </figure>
                    <div>
                      <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                        {review.user.name}
                      </h5>
                      <p className="text-[14px] leading-6  text-textColor">
                        {formateDate(review.createdAt)}
                      </p>

                      <p className="text__para mt-3 font-medium text-[15px] text-textColor ">
                        {review.reviewText}
                      </p>
                    </div>
                  </div>
                  <div className="gap-1 flex">
                    {[...Array(5).keys()].map((_, index) => {
                      return <AiFillStar key={index} color="#0067ff" />;
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div>
          {!showFeedbackForm && (
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give a Feedback
            </button>
          )}
          {showFeedbackForm && <FeedbackForm onNewReview={handleNewReview} />}
        </div>
      </div>
    </>
  );
}

export default DoctorFeedback;
