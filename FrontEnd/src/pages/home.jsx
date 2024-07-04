import { Link, useNavigate } from "react-router-dom";
import faqImg from "./../assets/img/faq-img.png";
import icon01 from "./../assets/img/icon01.png";
import icon02 from "./../assets/img/icon02.png";
import icon03 from "./../assets/img/icon03.png";
import { FaArrowRight } from "react-icons/fa";
import About from "../components/about/about";
import Services from "../components/services/services";
import ServicesList from "../components/services/servicesList";
import DoctorList from "../components/doctors/doctorsList";
import FaqList from "../components/faq/faqList";
import Feedback from "../components/feedback/feedback";
import Icons from "../components/Icons/icons";
import heroImage from "./../assets/img/Hero.jpg";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandle = (e) => {
    e.preventDefault();
    navigate(`/doctors?query=${searchQuery}`);
  };
  return (
    <>
      <>
        {/* ========= hero section ========= */}
        <div className="container px-10 py-10 space-x-6 flex flex-col-reverse md:flex-row ">
        <div className="space-y-5 md:w-1/2 flex flex-col justify-center py-6 text-center md:text-left">
          <p className="font-bold bg-teal-900 text-xl md:text-3xl text-white p-2 rounded-xl">
            Leading Dental Solution From 2019
          </p>
          <h1 className="text-4xl md:text-6xl text-teal-600 font-bold">
            Feel better about your smile.
          </h1>
          <div className="space-x-2">
            <Link
              to={"/doctors"}
              className="px-6 py-2 bg-teal-900 rounded-full text-white hover:bg-teal-600"
            >
              Book Now
            </Link>
            <a
              href="tel:+201015775920"
              className="px-6 py-2 bg-teal-900 rounded-full text-white hover:bg-teal-600"
            >
              Call Doctor
            </a>
          </div>
          <p className="font-bold">
            You Can Reach Us Faster Call
            <span className="text-teal-600">
              {" "}
              <a href="tel:+201015775920">+201015775920</a>{" "}
            </span>
          </p>
          <form onSubmit={searchHandle}>
            <label
              htmlFor="searchDoctor"
              className="block mb-2 text-teal-600 font-bold"
            >
              Search For Doctor
            </label>
            <input
              type="search"
              name="searchDoctor"
              id="searchDoctor"
              className="border border-teal-600 p-2 rounded-full w-full focus:outline-none"
              placeholder="Search For Doctor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="submit"
              value="Search"
              className="px-6 py-2 bg-teal-900 rounded-xl text-white hover:bg-teal-600 mt-2"
            />
          </form>
        </div>
        <div className="flex justify-center md:w-1/2">
          <div className="flex flex-row items-center justify-end ">
            <img
              src={heroImage}
              alt="Doctor image"
              className="h-[25rem] md:h-[35rem]"
            />
            <div className="hidden lg:flex flex-col ps-20 space-y-3">
              <Icons />
            </div>
          </div>
        </div>
      </div>
        {/* ========== end hero content ======== */}

        {/* ============ start about section =============*/}
        <About />
        {/* ============ end about section ===============*/}

        {/*========== under hero section =========*/}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing The Best Medical Services
              </h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched experts health care.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                <div className="py-[30px] px-5 ">
                  <div className="flex item-center justify-center">
                    <img src={icon01} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Doctor
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class care for everyone. Our health system offers
                      unmatched experts health care.
                    </p>
                    <Link
                      to={"/doctors"}
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <FaArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="py-[30px] px-5 ">
                  <div className="flex item-center justify-center">
                    <img src={icon02} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Location
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class care for everyone. Our health system offers
                      unmatched experts health care.
                    </p>
                    <Link
                      to={"/doctors"}
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <FaArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="py-[30px] px-5 ">
                  <div className="flex item-center justify-center">
                    <img src={icon03} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Take an Appointment
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class care for everyone. Our health system offers
                      unmatched experts health care.
                    </p>
                    <Link
                      to={"/doctors"}
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <FaArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*========== under hero section =========*/}

        {/* =========== start service ==============*/}
        <section className="bg-teal-50">
          <Services />
          <ServicesList />
        </section>
        {/* =========== end service ==============*/}

        {/* =========== start doctor =============== */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Best Doctors</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>
            <DoctorList />
          </div>
        </section>
        {/* =========== end doctor =============== */}

        {/*=========== start faq question =========*/}
        <section>
          <div className="container">
            <div className="flex items-center gap-[50px] lg:gap-0 ">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt="" className="h-full w-full rounded-xl" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="heading mb-5">
                  Most question by our beloved patients
                </h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/*=========== end faq question =========*/}

        {/*=========== start patient`s feedback ==========*/}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What Patient`s Says</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>
            <Feedback />
          </div>
        </section>
        {/*=========== end patient`s feedback ==========*/}
      </>
    </>
  );
}

export default Home;
