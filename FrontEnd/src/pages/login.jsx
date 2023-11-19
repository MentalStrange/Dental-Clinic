import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-xl md:p-10 text-center">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Hello! <span className="text-primaryColor ">Welcome </span>Back
          </h3>
          <form className="py-4 md:py-0 ">
            <div className="mb-5">
              <input
                type="email"
                name=""
                id=""
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>

            <div className="mb-2">
              <input
                type="password"
                name=""
                id=""
                value={formData.password}
                placeholder="Enter Your password"
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>

            <div className="mt-2">
              <button type="submit" className="btn w-full rounded-md ">
                Login
              </button>
            </div>
            <p className="mt-5 text-textColor text-center ">
              Don&apos;t have an account?{" "}
              <Link to={"/register"} className="text-primaryColor">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
