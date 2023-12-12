import { formateDate } from "../../utils/formateDate";
import avatar from "./../../assets/img/patient-avatar.png";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import FeedbackForm from "./feedbackForm";
function DoctorFeedback() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <>
      <div>
        <div className="mt-[50px]">
          <h4 className=" text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]  ">
            All Reviews (282){" "}
          </h4>
          <div className="flex justify-between gap-10 mb-[30px] ">
            <div className="flex gap-3 ">
              <figure className="w-14 h-14 rounded-full">
                <img src={avatar} alt="" className="w-full rounded-full" />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  Mohamed Ramadan
                </h5>
                <p className="text-[14px] leading-6  text-textColor">
                  {formateDate(2 / 2 / 2002)}
                </p>

                <p className="text__para mt-3 font-medium text-[15px] text-textColor ">
                  Good services, great services,highly recommended.
                </p>
              </div>
            </div>
            <div className="gap-1 flex">
              {[...Array(5).keys()].map((_, index) => {
                return <AiFillStar key={index} color="#0067ff" />;
              })}
            </div>
          </div>
        </div>
        <div>
          {!showFeedbackForm && (
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give a Feedback
            </button>
          )}
          {showFeedbackForm && <FeedbackForm />}
        </div>
      </div>
    </>
  );
}

export default DoctorFeedback;
