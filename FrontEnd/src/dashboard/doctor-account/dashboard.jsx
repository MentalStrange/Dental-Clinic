import { useContext, useState } from "react";
import { BASE_URL, token } from "../../../config";
import useGetProfile from "../../hooks/useFetchData";
import { authContext } from "../../context/authContext";
import Loading from "../../components/loader/loading";
import Error from "../../components/error/error";
import Overview from "./overview";
import Appointment from "./appointment";
import Profile from "./profile";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("overview");
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  console.log(data);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await fetch(`${BASE_URL}/doctors/${data._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      localStorage.clear();
      if (!res.ok) {
        const errorMessage = await res.text();
        toast.error(errorMessage);
        Navigate("/");
        throw new Error(errorMessage);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="mt-6 md:mt-12">
              <button
                className={`w-full p-3 text-lg leading-7 rounded-md mb-4 hover:bg-blue-200 hover:text-blue-800 ${
                  tab === "overview" && "bg-blue-200 text-blue-800"
                }`}
                onClick={() => setTab("overview")}
              >
                Overview
              </button>
              <button
                className={`w-full p-3 text-lg leading-7 rounded-md mb-4 hover:bg-blue-200 hover:text-blue-800 ${
                  tab === "appointment" && "bg-blue-200 text-blue-800"
                }`}
                onClick={() => setTab("appointment")}
              >
                Appointments
              </button>
              <button
                className={`w-full p-3 text-lg leading-7 rounded-md mb-4 hover:bg-blue-200 hover:text-blue-800 ${
                  tab === "profile" && "bg-blue-200 text-blue-800"
                }`}
                onClick={() => setTab("profile")}
              >
                Profile
              </button>
            </div>
            <div className="flex flex-col justify-end mt-6 md:mt-12">
              <button
                className="w-full bg-[#181A1e] p-3 text-lg leading-7 rounded-md text-white mb-4"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="w-full bg-red-600 p-3 text-lg leading-7 rounded-md text-white"
                onClick={() => handleDeleteAccount()}
              >
                Delete Account
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            {tab === "overview" ? (
              <Overview />
            ) : tab === "profile" ? (
              <Profile doctor={data} />
            ) : (
              <Appointment />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
