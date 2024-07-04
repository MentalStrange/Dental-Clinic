/* eslint-disable react/prop-types */
import { HashLoader } from "react-spinners";

function Loading({color}) {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <HashLoader color={color?color:"teal"} />
      </div>
    </>
  );
}

export default Loading;
