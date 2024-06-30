/* eslint-disable react/prop-types */
import Loading from "../../components/loader/loading";
import { formateDate } from "../../utils/formateDate";
function DoctorAbout({ doctor }) {
  return (
    <>
      <div>
        <h3 className="text-[20px] mt-4 leading-[20px] text-textColor font-semibold flex items-center gap-2  ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-6 ">
            {doctor.name}{" "}
          </span>
        </h3>
        <p className="text__para">{doctor.about}</p>
        <hr className="border border-solid border-primaryColor my-5" />
        <div className="mt-2">
          <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
            Education{" "}
          </h3>

          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:pt-5">
            {!doctor.qualifications ? (
              <Loading />
            ) : (
              doctor.qualifications.map((qualification, index) => {
                return (
                  <li className=" p-4 rounded bg-[#fff9ea] " key={index}>
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                      {formateDate(qualification.startDate)} -{" "}
                      {formateDate(qualification.endDate)}
                    </span>
                    <p className="text-textColor"> {qualification.degree}</p>
                    <p className="text-textColor">{qualification.university}</p>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DoctorAbout;
