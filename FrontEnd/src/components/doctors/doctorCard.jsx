/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import starIcon from "./../../assets/img/Star.png";
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "./../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
function DoctorCard({ doctor }) {
  const {
    _id: id,
    name,
    specialty,
    photo,
    avgRating,
    totalRating,
    totalPatients,
    hospital,
  } = doctor;
  const {
    data: doctorData,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);
  return (
    <>
      <div className="p-3 lg:p-5 ">
        <div>
          <img src={photo} alt={name} className="w-full" />
        </div>
        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">
          {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-[#CCF0F3] text-irisBlueColor px-2 lg:py-2 text-[12px leading-4 lg:text-[16px] lg:leading-7 font-semibold]">
            {specialty}
          </span>
          <div className="flex item-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor ">
              <img src={starIcon} alt="" />
              {avgRating}
            </span>
            <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor ">
              ({totalRating})
            </span>
          </div>
        </div>
        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor ">
              {totalPatients}
            </h3>
            <p className="text-[14px] leading-6 font-[400] text-textColor">
              At {hospital}
            </p>
          </div>
          <Link
            to={`/doctors/${id}}`}
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
          >
            <FaArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
