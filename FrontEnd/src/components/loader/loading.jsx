import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <HashLoader color="primaryColor" />
      </div>
    </>
  );
}

export default Loading;
