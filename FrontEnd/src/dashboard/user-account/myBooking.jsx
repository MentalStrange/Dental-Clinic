import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Loading from "../../components/loader/loading";
import Error from "../../components/error/error";
import DoctorCard from "../../components/doctors/doctorCard";

function MyBooking() {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log("Appointments:", appointments);
  console.log("Loading:", loading);
  console.log("Error:", error);

  return (
    <>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && Array.isArray(appointments) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <div key={doctor._id}>
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      )}

      {!loading &&
        !error &&
        Array.isArray(appointments.doctors) &&
        appointments.doctors.length === 0 && (
          <h2 className="mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor">
            You Did not Book Any Doctor Yet..!
          </h2>
        )}
    </>
  );
}

export default MyBooking;
