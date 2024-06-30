import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../config";
import { formateDate } from "../../utils/formateDate";

/* eslint-disable react/prop-types */
function Appointment({ appointments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionType, setActionType] = useState("");

  const handleUpdateAppointment = async (id, status) => {
    const res = await fetch(`${BASE_URL}/doctors/appointment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    });
    if (res.status === 200) {
      toast.success("Appointment accepted successfully");
    }
  };

  const handleActionClick = (appointment, action) => {
    setSelectedAppointment(appointment);
    setActionType(action);
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    if (actionType === "delete") {
      handleUpdateAppointment(selectedAppointment._id, "cancelled");
    } else if (actionType === "accept") {
      handleUpdateAppointment(selectedAppointment._id, "approved");
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
    setActionType("");
  };

  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl mb-2 text-primaryColor font-bold">
        Appointments
      </h1>

      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                Gender
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Payment
              </th>
              <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                Total
              </th>
              <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                Booked On
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.user.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.user.gender}
                </td>
                <td className="p-3 text-sm text-gray-7000 whitespace-nowrap">
                  {formateDate(appointment.appointmentDate)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.isPaid ? "Paid" : "Not Paid"}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.doctor.ticketPrice}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {formateDate(appointment.createdAt)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    className="text-white bg-red-600 p-2 rounded-md hover:bg-red-700 mr-2"
                    onClick={() => handleActionClick(appointment, "delete")}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-green-600 p-2 rounded-md hover:bg-green-700"
                    onClick={() => handleActionClick(appointment, "accept")}
                  >
                    Accept
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-2 text-sm">
              <div className="text-gray-500">{appointment.user.name}</div>
            </div>
            <div className="text-sm text-gray-700">
              {`${appointment.user.gender}`}
            </div>
            <div className="text-sm font-medium text-black">
              {appointment.doctor.ticketPrice}{" "}Pound
            </div>
            <div className="text-sm text-gray-7000">
              {`Date: ${formateDate(appointment.appointmentDate)}, Payment: ${appointment.isPaid?"Paid":"Not Paid"}`}
            </div>
            <div className="flex justify-around">
              <button
                className="text-white bg-red-600 p-2 rounded-md hover:bg-red-700"
                onClick={() => handleActionClick(appointment, "delete")}
              >
                Delete
              </button>
              <button
                className="text-white bg-green-600 p-2 rounded-md hover:bg-green-700"
                onClick={() => handleActionClick(appointment, "accept")}
              >
                Accept
              </button>
            </div>
          </div>
        ))}
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
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to {actionType} this appointment?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                onClick={handleModalConfirm}
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
    </div>
  );
}

export default Appointment;
