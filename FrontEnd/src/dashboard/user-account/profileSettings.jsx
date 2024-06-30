/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import { useImageUpload } from "../../utils/useImageUpload";
import {token} from '../../../config'
import { toast } from "react-toastify";
function ProfileSettings({user}) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [bloodType, setBloodType] = useState(user.bloodType || "");
  const [gender, setGender] = useState(user.gender || "Male");
  const [photo, setPhoto] = useState(user.photo || null);

  const { fileInputRef, handleImageChange, handleIconClick } = useImageUpload(setPhoto);

  const handleUpdateProfile = () => {
    try {
      const res = axios.patch(`${BASE_URL}/users/${user._id}`, {
        name,
        email,
        bloodType,
        gender,
        photo,
      },{
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if(res.status === 200){
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <section className="xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1">
          <div className="rounded-l-lg">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Profile <span className="text-primaryColor">Settings</span>
            </h3>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Blood Type"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>

            <div className="mb-5 flex items-center justify-between">
              <label
                htmlFor=""
                className="text-headingColor font-bold text-[16px] leading-7"
              >
                Gender:
                <select
                  className="text-textColor font-semibold text-[15px]  leading-7 px-[6px] py-[6px] ml-2 focus:outline-none"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>

            <div className="mb-5 flex items-center gap-3">
              {photo && (
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor ">
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-[100px] h-[55px] rounded-full"
                  />
                </figure>
              )}

              <div className="relative w-[130px] h-[50px]">
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="photo-upload"
                  className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                >
                  {photo ? (
                    <button onClick={handleIconClick}>Change Photo</button>
                  ) : (
                    <button onClick={handleIconClick}>Upload Photo</button>
                  )}
                </label>
              </div>
            </div>

            <div className="mt-2">
              <button
                className="btn w-full rounded-md"
                onClick={handleUpdateProfile}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSettings;
