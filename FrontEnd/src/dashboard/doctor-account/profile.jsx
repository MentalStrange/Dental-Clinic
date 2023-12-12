/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../../config";
import uploadImageToCloudinary from "../../utils/cloudinary";

function Profile({ doctor }) {
  const inputStyle =
    "w-full pr-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer";
  const [loading, setLoading] = useState(false);
  const [qualification, setQualification] = useState([
    { startDate: "", endDate: "", degree: "", university: "" },
  ]);
  const [time, setTime] = useState([{ day: "", startTime: "", endTime: "" }]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    specialization: "",
    ticketPrice: 0,
    role: "",
    photo: null,
    qualifications: [
      { startDate: "", endDate: "", degree: "", university: "" },
    ],
    timeSlots: [{ day: "", startTime: "", endTime: "" }],
    about: "",
  });
  const Navigate = useNavigate();

  useEffect(() => {
    // Set initial values for form fields based on the doctor's profile
    setFormData({
      name: doctor.name,
      email: doctor.email,
      password: doctor.password,
      phone: doctor.phone,
      bio: doctor.bio,
      specialization: doctor.specialization,
      ticketPrice: doctor.ticketPrice,
      qualifications: doctor.qualifications || [
        { startDate: "", endDate: "", degree: "", university: "" },
      ],
      timeSlots: doctor.timeSlots || [{ day: "", startTime: "", endTime: "" }],
      about: doctor.about || "",
    });
    setQualification(doctor.qualifications || []);
    setTime(doctor.timeSlots || []);
  }, [doctor]);
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedFormData = {
        ...formData,
        qualifications: qualification,
        timeSlots: time,
      };
      const res = await fetch(`${BASE_URL}/doctors/${doctor._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData),
      });
      if (!res.ok) {
        setLoading(false);
        const errorMessage = await res.text();
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      const { message } = await res.json();
      setLoading(false);
      toast.success(message);
      Navigate("/doctors/profile/me");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    setQualification([
      ...qualification,
      { startDate: "", endDate: "", degree: "", university: "" },
    ]);
  };

  const handleQualificationChange = (index, type, value) => {
    const updatedQualification = [...qualification];
    updatedQualification[index][type] = value;
    setQualification(updatedQualification);
  };

  const handleAddTime = (e) => {
    e.preventDefault();
    setTime([...time, { day: "", startTime: "", endTime: "" }]);
  };

  const handleTimeChange = (index, type, value) => {
    const updatedTime = [...time];
    updatedTime[index][type] = value;
    setTime(updatedTime);
  };

  const handleDeleteQualification = (index) => {
    const updatedQualification = [...qualification];
    updatedQualification.splice(index, 1);
    setQualification(updatedQualification);
  };

  const handleDeleteTime = (index) => {
    const updatedTime = [...time];
    updatedTime.splice(index, 1);
    setTime(updatedTime);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" full name"
          value={formData.name}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" your email"
          value={formData.email}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" your password"
          value={formData.password}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder=" +20123456789"
          value={formData.phone}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="bio">Bio</label>
        <input
          type="bio"
          name="bio"
          id="bio"
          placeholder=" Your Bio"
          value={formData.bio}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="specialization">specialization</label>
        <select
          className={inputStyle}
          value={formData.specialization}
          name="specialization"
          onChange={handleInputChange}
        >
          <option>Choose One</option>
          <option value="orthodontist">Orthodontist</option>
          <option value="dentalSurgery">Dental Surgery</option>
          <option value="forensicOdontology">Forensic odontology</option>
          <option value="orofacialPain">Orofacial pain</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="ticketPrice">Ticket Price</label>
        <input
          type="number"
          name="ticketPrice"
          id="ticketPrice"
          placeholder=" Your Ticket Price"
          value={formData.ticketPrice}
          onChange={handleInputChange}
          className={inputStyle}
        />
      </div>

      <hr className="border border-solid border-primaryColor my-10" />

      <div className="mb-5">
        {qualification.map((section, index) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-between gap-10"
              key={index}
            >
              <div className="mb-5 md:w-1/2 w-full">
                <label htmlFor={`startDate${index}`}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  id={`startDate${index}`}
                  value={section.startDate}
                  onChange={(e) =>
                    handleQualificationChange(
                      index,
                      "startDate",
                      e.target.value
                    )
                  }
                  className={inputStyle}
                />
              </div>
              <div className="mb-5 md:w-1/2 w-full">
                <label htmlFor={`endDate${index}`}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  id={`endDate${index}`}
                  value={section.endDate}
                  onChange={(e) =>
                    handleQualificationChange(index, "endDate", e.target.value)
                  }
                  className={inputStyle}
                />
              </div>
              <div className="mb-5 md:w-1/2 w-full">
                <label htmlFor={`degree${index}`}>Degree</label>
                <input
                  type="text"
                  name="degree"
                  id={`degree${index}`}
                  value={section.degree}
                  onChange={(e) =>
                    handleQualificationChange(index, "degree", e.target.value)
                  }
                  className={inputStyle}
                />
              </div>
              <div className="mb-5 md:w-1/2 w-full">
                <label htmlFor={`university${index}`}>University</label>
                <input
                  type="text"
                  name="university"
                  id={`university${index}`}
                  value={section.university}
                  onChange={(e) =>
                    handleQualificationChange(
                      index,
                      "university",
                      e.target.value
                    )
                  }
                  className={inputStyle}
                />
              </div>
              <button
                className="mb-4 text-white bg-red-600 p-2 rounded-md hover:bg-red-700 h-fit w-fit md:m-auto"
                onClick={() => handleDeleteQualification(index)}
              >
                Delete
              </button>
            </div>
          );
        })}

        <button className="btn rounded-md" onClick={handleAddQualification}>
          Add Qualification
        </button>
      </div>

      <div className="mb-5">
        {time.map((section, index) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-between gap-10"
              key={index}
            >
              <div className="mb-5 md:w-1/3 w-full">
                <label htmlFor={`startTime${index}`}>Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  id={`startTime${index}`}
                  value={section.startTime}
                  onChange={(e) =>
                    handleTimeChange(index, "startTime", e.target.value)
                  }
                  className={inputStyle}
                />
              </div>
              <div className="mb-5 md:w-1/3 w-full">
                <label htmlFor={`endTime${index}`}>End Time</label>
                <input
                  type="time"
                  name="endTime"
                  id={`endTime${index}`}
                  value={section.endTime}
                  onChange={(e) =>
                    handleTimeChange(index, "endTime", e.target.value)
                  }
                  className={inputStyle}
                />
              </div>
              <div className="mb-5 md:w-1/3 w-full">
                <label htmlFor={`day${index}`}>Day</label>
                <input
                  type="text"
                  name="day"
                  id={`day${index}`}
                  value={section.day}
                  onChange={(e) =>
                    handleTimeChange(index, "day", e.target.value)
                  }
                  className={inputStyle}
                />
              </div>
              <button
                className="mb-4 text-white bg-red-600 p-2 rounded-md hover:bg-red-700 h-fit w-fit md:m-auto"
                onClick={() => handleDeleteTime(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="btn rounded-md" onClick={handleAddTime}>
          Add Available Time
        </button>
      </div>

      <div className="my-10">
        <h1 className="text-headingColor text-[20px] leading-6 font-semibold mb-4 mt-0 ">
          About
        </h1>
        <textarea
          rows="5"
          name="about"
          value={formData.about}
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write Your Feedback"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="mb-5 flex items-center gap-3">
        {formData.photo && (
          <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor ">
            <img src={formData.photo} alt="" className="w-full rounded-full" />
          </figure>
        )}

        <div className="relative w-[130px] h-[50px]">
          <input
            type="file"
            name="photo"
            id="customFile"
            onChange={handleInputFileChange}
            accept=".jpg, .png"
            className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"
          />
          <label
            htmlFor="customFile"
            className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
          >
            Upload Photo
          </label>
        </div>
      </div>
      <div className="mt-2">
        <button
          type="submit"
          className="btn w-full rounded-md "
          disabled={loading && true}
        >
          {loading ? <HashLoader size={35} color="white" /> : "Update"}
        </button>
      </div>
    </form>
  );
}

export default Profile;
