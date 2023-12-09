import signUpImg from "./../assets/img/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/cloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

function SignUp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "",
  });
  const Navigate = useNavigate();
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      Navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="px-5 xl:px-0">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ===== img box ====== */}
            <div className="hidden lg:block bg-primaryColor rounded-l-lg">
              <figure className="rounded-l-lg">
                <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
              </figure>
            </div>

            {/* ===== sign up form */}
            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                Create an <span className="text-primaryColor">account</span>
              </h3>

              <form action="/login" onSubmit={submitHandler}>
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
                  />
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-[16px] leading-7"
                  >
                    Are you a:
                    <select
                      className="text-textColor font-semibold text-[15px]  leading-7 px-[6px] py-[6px] ml-2 focus:outline-none"
                      value={formData.role}
                      name="role"
                      onChange={handleInputChange}
                    >
                      <option>Choose One</option>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-[16px] leading-7"
                  >
                    Gender:
                    <select
                      className="text-textColor font-semibold text-[15px]  leading-7 px-[6px] py-[6px] ml-2 focus:outline-none"
                      value={formData.gender}
                      name="gender"
                      onChange={handleInputChange}
                    >
                      <option>Choose One</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  {selectedFile && (
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor ">
                      <img
                        src={previewURL}
                        alt=""
                        className="w-full rounded-full"
                      />
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
                    {loading ? (
                      <HashLoader size={35} color="white" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
                <p className="mt-5 text-textColor text-center ">
                  Already have an account{" "}
                  <Link to={"/login"} className="text-primaryColor font-bold">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
