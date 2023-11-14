import { Route, Routes } from "react-router-dom";
import Home from "./../pages/home";
import Services from "./../pages/services";
import Login from "./../pages/login";
import SignUp from "./../pages/signUp";
import Contact from "./../pages/contact";
import Doctors from "../pages/Doctors/doctors";
import DoctorDetails from "./../pages/Doctors/doctorDetails";
function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctorDetails" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default Routers;
