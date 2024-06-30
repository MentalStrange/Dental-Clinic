import aboutImg from "./../../assets/img/about.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className=" bg-teal-50 p-0 m-0">
        <div className=" container text-center px-10 py-10 md:py-20 ">
          <h1 className=" mb-4 text-teal-900 font-bold text-4xl relative lg:text-9xl lg:absolute lg:mx-[27rem] ">
            About Us
          </h1>
          <div className="flex flex-col items-center md:flex-row md:space-x-5">
            <img
              src={aboutImg}
              alt="About Us image"
              className="md:w-1/2 rounded-t-xl"
            />
            <div className="mt-3 flex items-end md:items-center md:w-1/2 ">
              <p className="leading-7 text-gray-500 md:font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                inventore eius unde cumque id reprehenderit sit. Eius sunt ipsam
                dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis ipsa pariatur non! Totam nihil neque possimus aperiam,
                ipsam doloribus. Pariatur ad assumenda accusamus. Doloremque
                earum fugit et quidem optio magnam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eos ratione dolores molestias non
                quam quidem tempora dolorem autem, delectus repudiandae
                aspernatur reiciendis iure illum, laboriosam quaerat sint,
                explicabo temporibus excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
