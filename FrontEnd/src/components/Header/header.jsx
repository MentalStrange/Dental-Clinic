import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useContext } from "react";
import { authContext } from "../../context/authContext";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
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
function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handelHeaderSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  const toggleMenu = () => {
    return menuRef.current.classList.toggle("show__menu");
  };
  useEffect(() => {
    handelHeaderSticky();
    return () => {
      window.removeEventListener("scroll", handelHeaderSticky);
    };
  });
  return (
    <>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ====== logo ======= */}
            <div>
              <img src={logo} alt="" className="w-[170px] lg:w-[200px]" />
            </div>

            {/* ====== menu ======= */}
            <div
              className="navigation"
              ref={menuRef}
              // Login
              onClick={toggleMenu}
            >
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ===== Nav Right ===== */}
            <div className="flex items-center gap-4">
              {token && user ? (
                <div>
                  <Link
                    to={`${
                      role === "doctor"
                        ? "/doctors/profile/me"
                        : "/users/profile/me"
                    }`}
                  >
                    <figure className="w-[35px] h-[35px] rounded-full">
                      <img
                        src={user.photo}
                        alt=""
                        className="rounded-full w-full"
                      />
                    </figure>
                  </Link>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[40px] flex items-center justify-center rounded-[50px]">
                    Login
                  </button>
                </Link>
              )}
              {/* ===== Nav ===== */}
              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
