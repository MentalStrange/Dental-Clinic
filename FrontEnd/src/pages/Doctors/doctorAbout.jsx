/* eslint-disable react/prop-types */
import Loading from "../../components/loader/loading";
import { formateDate } from "../../utils/formateDate";
function DoctorAbout({ doctor }) {
  return (
    <>
      <div>
        <h3 className="text-[20px] mt-4 leading-[30px] text-textColor font-semibold flex items-center gap-2  ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-6 ">
            {doctor.name}{" "}
          </span>
        </h3>
        <p className="text__para">{doctor.about}</p>
        <hr className="border border-solid border-primaryColor my-5" />
        {/* <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
            Education{" "}
          </h3>
          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate("2/2/2001")}
                </span>
                <p className="text-textColor"> Computer Science</p>
              </div>
            </li>
          </ul>
        </div> */}

        <div className="mt-4">
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
