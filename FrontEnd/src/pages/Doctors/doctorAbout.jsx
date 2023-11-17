function DoctorAbout() {
  return (
    <>
      <div>
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center gap-2  ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-6 ">
            Mohamed Ramadan{" "}
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          exercitationem quaerat beatae non, eos culpa libero veniam architecto
          recusandae debitis nihil sed sunt, facere odit inventore quibusdam!
          Et, sequi deserunt.
        </p>

        <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
            Education{" "}
          </h3>
          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  2-2-2001
                </span>
                <p className="text-textColor"> Computer Science</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DoctorAbout;
