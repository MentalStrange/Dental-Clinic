import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://facebook.com/mohamedramadan2393",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://facebook.com/mohamedramadan2393",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://facebook.com/mohamedramadan2393",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://facebook.com/mohamedramadan2393",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/about",
    display: "Request an Appointment",
  },
  {
    path: "/services",
    display: "Find a Location",
  },
  {
    path: "/contact",
    display: "Get an Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/doctors",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const year = new Date().getFullYear();
function Footer() {
  return (
    <>
      <footer className="pb-16 pt-10">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] ">
            <div>
              <img src={logo} alt="" className="w-[170px]" />
              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4  ">
                Copyright&copy; {year} developed by Mohamed Ramadan all right
                reserved.
              </p>

              <div className="flex items-center gap-4 mt-4 ">
                {socialLinks.map((link) => {
                  return (
                    <>
                      <Link
                        to={link.path}
                        className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hvoer:border-none "
                      >
                        {link.icon}
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            {/* Quick Links */}

            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-4">
                Quick Links
              </h2>
              <ul>
                {quickLinks01.map((link, index) => {
                  return (
                    <>
                      <li key={index} className="mb-4">
                        <Link
                          to={link.path}
                          className="text-[16px] leading-7 font-[400] text-textColor"
                        >
                          {link.display}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            {/* I Want to: */}
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-4">
                I Want to:
              </h2>
              <ul>
                {quickLinks02.map((link, index) => {
                  return (
                    <>
                      <li key={index} className="mb-4">
                        <Link
                          to={link.path}
                          className="text-[16px] leading-7 font-[400] text-textColor"
                        >
                          {link.display}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            {/* support */}
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-4">
                Support
              </h2>
              <ul>
                {quickLinks03.map((link, index) => {
                  return (
                    <>
                      <li key={index} className="mb-4">
                        <Link
                          to={link.path}
                          className="text-[16px] leading-7 font-[400] text-textColor"
                        >
                          {link.display}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
