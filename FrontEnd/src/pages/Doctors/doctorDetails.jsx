import { useState } from "react";
import doctorImg from "./../../assets/img/doctor-img01.png";
import starIcon from "./../../assets/img/Star.png";
import DoctorAbout from "./doctorAbout";
import DoctorFeedback from "./doctorFeedback";
import SidePanel from "./sidePanel";
function DoctorDetails() {
  const [tab, setTab] = useState("about");
  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5 ">
                <figure className="max-w-[200px] max-h-[200px] ">
                  <img src={doctorImg} alt="" />
                </figure>
                <div className="">
                  <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    Surgeon
                  </span>
                  <h3 className="text-headingColor leading-9">
                    Mohamed Ramadan
                  </h3>
                  <div className="flex items-center gap-[6px] ">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor ">
                      <img src={starIcon} alt="" /> 4.8
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor">
                      (283)
                    </span>
                  </div>
                  <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, dolores.
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab == "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold `}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab == "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold `}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab == "about" && <DoctorAbout />}
                {tab == "feedback" && <DoctorFeedback />}
              </div>
            </div>
            <div>
              <SidePanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoctorDetails;
