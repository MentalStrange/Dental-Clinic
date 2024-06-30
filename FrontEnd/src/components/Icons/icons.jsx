/* eslint-disable react/prop-types */
import { FaFacebook, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
function Icons(props) {
  return (
    <>
      <a
        href=""
        className={` ${props.text} p-3  text-teal-900 rounded text-center border-teal-900 border-2 hover:bg-teal-900 hover:text-white `}
      >
        <FaPhoneAlt />
      </a>
      <a
        href=""
        className={` ${props.text} p-3  text-teal-900 rounded text-center border-teal-900 border-2 hover:bg-teal-900 hover:text-white `}
      >
        <FaFacebook />
      </a>
      <a
        href=""
        className={` ${props.text} p-3  text-teal-900 rounded text-center border-teal-900 border-2 hover:bg-teal-900 hover:text-white `}
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
export default Icons;
