import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "./doctorCard";

function DoctorList() {
  const {data, error, loading} = useFetchData(`${BASE_URL}/doctors/`);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px] ">
        {data.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor._id} />;
        })}
      </div>
    </>
  );
}

export default DoctorList;
