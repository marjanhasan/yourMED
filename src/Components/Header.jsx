import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-cyan-100 ">
      <div className="flex items-center justify-between relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* logo section  */}
        <Link to="/" className="">
          <span className="ml-2 text-2xl font-bold tracking-wide txt-color">
            yourMED
          </span>
        </Link>
        {/* nav section  */}
        <ul className="items-center hidden space-x-8 lg:flex font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="appointment"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Register
            </NavLink>
          </li>
        </ul>
        {/* button section  */}

        <button onClick={handleLogOut} className="btn hidden lg:flex">
          Log Out
        </button>
        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* dropdown open button  */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-cyan-50 border rounded shadow-sm">
                {/* logo & button section  */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide txt-color">
                        yourMED
                      </span>
                    </Link>
                  </div>
                  {/* dropdown menu close button  */}
                  <div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* mobile nav items section  */}
                <nav className="ml-2">
                  <ul className="space-y-4 font-medium">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="appointment"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Appointment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="orders"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="blog"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="login"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="register"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
