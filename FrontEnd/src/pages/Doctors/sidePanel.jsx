/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";

function SidePanel({ doctor }) {
  const { id: doctorId } = useParams();

  const handleBookingAppointment = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/users/appointments/createAppointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            doctorId,
            user: localStorage("user")._id,
          }),
        }
      );

      if (!res.ok) {
        console.error(
          "Error creating appointment:",
          res.status,
          res.statusText
        );
        // Handle error scenarios, you might want to show a user-friendly error message
        return;
      }

      const data = await res.json();
      console.log("Appointment created successfully:", data);
      // Handle success scenarios, you might want to notify the user or redirect them
    } catch (error) {
      console.error("Error creating appointment:", error.message);
      // Handle other error scenarios, you might want to show a user-friendly error message
    }
  };
  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p className="text__para mt-0 font-semibold">
            Ticket Price:
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
              {doctor.ticketPrice} Pound
            </span>
          </p>
        </div>

        <div className="mt-[30px]">
          <p className="text__para mt-0 font-semibold text-headingColor">
            Available time:
          </p>
          <ul className="mt-3">
            {!doctor.timeSlots
              ? null
              : doctor.timeSlots.map((timeSlot, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mb-2"
                  >
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                      {timeSlot.day}
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                      {`${timeSlot.startTime} - ${timeSlot.endTime}`}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
        <button
          className="btn px-2 w-full rounded-md"
          onClick={handleBookingAppointment}
        >
          Book Appointment
        </button>
      </div>
    </>
  );
}

export default SidePanel;
