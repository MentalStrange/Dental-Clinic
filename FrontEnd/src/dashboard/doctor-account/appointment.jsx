function Appointment() {
  // Mock data for appointments (replace this with your actual data)
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      gender: "Male",
      date: "2023-12-15",
      time: "10:30 AM",
      payment: "Cash",
      price: "$50",
      bookedOn: "2023-12-10",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      gender: "Female",
      date: "2023-12-16",
      time: "02:00 PM",
      payment: "Card",
      price: "$75",
      bookedOn: "2023-12-08",
    },
    // Add more appointment data as needed
  ];

  const handleDeletePatient = (id) => {
    // Implement the logic to delete the patient with the given ID
    console.log(`Delete patient with ID: ${id}`);
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
                Time
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
              <tr key={appointment.id} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {`${appointment.patientName}, ${appointment.gender}`}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.gender}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.date}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.time}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.payment}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.price}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.bookedOn}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    className="text-white bg-red-600 p-2 rounded-md hover:bg-red-700"
                    onClick={() => handleDeletePatient(appointment.id)}
                  >
                    Delete
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
            key={appointment.id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-2 text-sm">
              <div className="text-gray-500">{appointment.bookedOn}</div>
            </div>
            <div className="text-sm text-gray-700">
              {`${appointment.patientName}, ${appointment.gender}`}
            </div>
            <div className="text-sm font-medium text-black">
              {appointment.price}
            </div>
            <div className="text-sm text-gray-700">
              {`Date: ${appointment.date}, Time: ${appointment.time}, Payment: ${appointment.payment}`}
            </div>
            <div className="flex justify-start">
              <button
                className="text-white bg-red-600 p-2 rounded-md hover:bg-red-700"
                onClick={() => handleDeletePatient(appointment.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
