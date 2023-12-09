import DoctorAbout from "../../pages/Doctors/doctorAbout";
import doctorImg from "./../../assets/img/doctor-img01.png";
import starIcon from "./../../assets/img/Star.png";
function Overview() {
  return (
    <>
      <div className="flex items-center gap-5 ">
        <figure className="max-w-[200px] max-h-[200px] ">
          <img src={doctorImg} alt="" />
        </figure>
        <div className="">
          <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            Surgeon
          </span>
          <h3 className="text-headingColor leading-9">{name}</h3>
          <div className="flex items-center gap-[6px] ">
            <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor ">
              <img src={starIcon} alt="" /> 4.8
            </span>
            <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor">
              (200)
            </span>
          </div>
          <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            dolores.
          </p>
        </div>
      </div>
      <DoctorAbout />
    </>
  );
}

export default Overview;
