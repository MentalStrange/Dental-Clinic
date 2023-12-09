import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext";
import { HashLoader } from "react-spinners";

function Login() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setLoading(false);
        const result = await res.json();
        toast.error(result.message);
        throw new Error(result.message);
      }

      const result = await res.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });
      setLoading(false);
      toast.success(result.message);
      Navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-xl md:p-10 text-center">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Hello! <span className="text-primaryColor ">Welcome </span>Back
          </h3>
          <form className="py-4 md:py-0 " onSubmit={submitHandler}>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border--solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-extColor rounded-md cursor-pointer"
              />
            </div>

            <div className="mb-2">
              <input
                type="password"
                name="password"
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
                {loading ? <HashLoader size={35} color="white" /> : "Login"}
              </button>
            </div>
            <p className="mt-5 text-textColor text-center ">
              Don&apos;t have an account?{"  "}
              <Link to={"/register"} className="text-primaryColor font-bold">
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
