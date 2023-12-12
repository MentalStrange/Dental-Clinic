/* eslint-disable react/prop-types */
import DoctorAbout from "../../pages/Doctors/doctorAbout";
import starIcon from "./../../assets/img/Star.png";
function Overview({ doctor }) {
  console.log(doctor);
  return (
    <>
      <div className="flex items-center gap-5 ">
        <figure className="max-w-[200px] max-h-[200px] ">
          <img src={doctor.photo} alt="" />
        </figure>
        <div className="">
          <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            {doctor.specialization}
          </span>
          <h3 className="text-headingColor leading-9">{doctor.name}</h3>
          <div className="flex items-center gap-[6px] ">
            <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor ">
              <img src={starIcon} alt="" /> {doctor.averageRating}
            </span>
            <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor">
              ({doctor.totalRating})
            </span>
          </div>
          <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] ">
            {doctor.about}
          </p>
        </div>
      </div>
      <DoctorAbout doctor={doctor} />
    </>
  );
}

export default Overview;
