import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/doctors/doctorCard";
import Feedback from "../../components/feedback/feedback";

function Doctors() {
  return (
    <>
      <section className="bg-[#fff9ea] ">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
        </div>
        <div className="max-w-[570px] mt-[30px]  mx-auto bg-[0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            name=""
            id=""
            className="py-4 pl-4 pr-2 bg-slate-200 w-full focus-outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Search a Doctor"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => {
              return <DoctorCard doctor={doctor} key={doctor.id} />;
            })}
          </div>
        </div>
      </section>
      <hr className="container border border-solid border-primaryColor" />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Patient`s Says</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <Feedback />
        </div>
      </section>
    </>
  );
}

export default Doctors;
