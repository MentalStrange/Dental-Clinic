import aboutImg from "./../../assets/img/about.png";
import aboutCard from "./../../assets/img/about-card.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] flex-col lg:flex-row">
          {/* ======= about img ======== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              For 30 years in a row, Egypt. News & world Report has recognized
              us as one of the best publics clinic in the nation and #1 in
              Toukh. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores laborum temporibus labore unde laudantium deleniti eaque
              asperiores harum expedita, beatae minus ratione atque. Architecto
              repellendus inventore quo maiores. Sit, ex.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla
              consequuntur minima aliquid ex dolor, recusandae obcaecati
              blanditiis delectus consequatur maxime. Laboriosam amet distinctio
              ex earum temporibus blanditiis dignissimos explicabo.
            </p>
            <Link to={"/"}>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
