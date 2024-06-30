/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../../config";
import { toast } from "react-toastify";

function SidePanel({ doctor }) {
  const { id: doctorId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");

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
            user: JSON.parse(localStorage.getItem("user"))._id,
            day: selectedDay,
          }),
        }
      );

      if (!res.ok) {
        console.error(
          "Error creating appointment:",
          res.status,
          res.statusText
        );
        return;
      }
      if(res.status === 200){
        toast.success("Appointment created successfully");
      }
    } catch (error) {
      toast.error("Error creating appointment:", error.message);
      // Handle other error scenarios, you might want to show a user-friendly error message
    }
  };

  const handleBookButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    handleBookingAppointment();
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p className="text__para mt-0 font-semibold">
            Ticket Price :
            <span className="leading-7 text-[20px] lg:leading-8 text-headingColor font-bold">
              {`  ${doctor.ticketPrice} Pound`}
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
          onClick={handleBookButtonClick}
        >
          Book Appointment
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleModalCancel}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-semibold mb-4">Select the day you want to book the appointment:</p>
            <select
              className="mb-4 p-2 border rounded-md w-full"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="" disabled>Select a day</option>
              {doctor.timeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot.day}>
                  {timeSlot.day}
                </option>
              ))}
            </select>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleModalConfirm}
                disabled={!selectedDay}
              >
                Yes
              </button>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleModalCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidePanel;
