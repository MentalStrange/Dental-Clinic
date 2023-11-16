import { Link } from "react-router-dom";
import heroImg1 from "./../assets/img/hero-img01.png";
import heroImg2 from "./../assets/img/hero-img02.png";
import heroImg3 from "./../assets/img/hero-img03.png";
import faqImg from "./../assets/img/faq-img.png";
import icon01 from "./../assets/img/icon01.png";
import icon02 from "./../assets/img/icon02.png";
import icon03 from "./../assets/img/icon03.png";
import featureImg from "./../assets/img/feature-img.png";
import { FaArrowRight } from "react-icons/fa";
import About from "../components/about/about";
import Services from "../components/services/services";
import ServicesList from "../components/services/servicesList";
import DoctorList from "../components/doctors/doctorsList";
import FaqList from "../components/faq/faqList";
import Feedback from "../components/feedback/feedback";
function Home() {
  return (
    <>
      <>
        {/* ========= hero section ========= */}
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ========== start hero content ======== */}
              <div className="">
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[45px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    eveniet tempore blanditiis quam reiciendis, officiis
                    voluptatum dignissimos maiores modi aperiam eligendi
                    nesciunt qui deserunt porro enim voluptatem veniam fuga
                    dolorem.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* =========== hero counter ============ */}
                <div className="mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap-[30px] ">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      +30
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      +30
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      +30
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img src={heroImg1} alt="" className="w-full " />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg2} alt="" className="w-full mb-[30px] " />
                  <img src={heroImg3} alt="" className="w-full " />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== end hero content ======== */}

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

        {/* ============ start about section =============*/}
        <About />
        {/* ============ end about section ===============*/}

        {/* =========== start service ==============*/}
        <section className="container">
          <Services />
          <ServicesList />
        </section>
        {/* =========== end service ==============*/}

        {/* =========== start feature ================= */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/* =========== feature content ========= */}
              <div className="xl:w-[670px]">
                <h2 className="heading">Get Virtual treatment</h2>
                <ul className="pl-4">
                  <li className="text__para">
                    1. Schedule the appointment directly
                  </li>
                  <li className="text__para">
                    2. Search for your physician here, and contact their office.
                  </li>
                  <li className="text__para">
                    3. View Our physician who are accepting new patients.
                  </li>
                </ul>
                <Link to={"/"}>
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              {/* =========== feature img =========== */}
              <div className="relative z-10 xl:w-[770px] flex justify-center lg:justify-end mt-[50px] lg:mt-0 ">
                <img src={featureImg} className="w-3/4" alt="" />
                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] "></div>
              </div>
            </div>
          </div>
        </section>
        {/* =========== end feature ================= */}

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
                <img src={faqImg} alt="" />
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
