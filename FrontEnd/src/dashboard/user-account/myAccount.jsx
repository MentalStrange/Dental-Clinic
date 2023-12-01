import { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import MyBooking from "./myBooking";
import ProfileSettings from "./profileSettings";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
function MyAccount() {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("booking");
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/users/profile/me`
  );
  console.log(data, loading, error);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <div>
        <div className="max-w-[1170px] px-5 mx-auto container">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor ">
                  <img src="" alt="" className="w-full h-full rounded-full" />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  Mohamed Ramadan
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Mohamd@gmail.com
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:{" "}
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    B+
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  className="w-full bg-[#181A1e] p-3 text-[16px] leading-7 rounded-md text-white mb-5"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white"
                  onClick={() => handleDeleteAccount()}
                >
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  className={`${
                    tab === "booking" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 rounded-md text-textColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                  onClick={() => setTab("booking")}
                >
                  My Booking
                </button>

                <button
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 rounded-md text-textColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                  onClick={() => setTab("settings")}
                >
                  Profile Settings
                </button>
              </div>
              {tab === "booking" ? <MyBooking /> : <ProfileSettings />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
