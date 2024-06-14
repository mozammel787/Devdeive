import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className="navbar  glass  md:py-5 z-50  -mb-[95px] sticky top-0">
        <div className="container mx-auto justify-between">
          <div className="flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/about"}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/courses"}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/contact"}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className=" text-xl">
              <img className="w-[200px] md:w-[220px]" src="logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center">
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/about"}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/courses"}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-base text-gray-700 hover:text-primary"
                    to={"/contact"}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-7 mr-3">
            <div className=" dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className=" btn-circle avatar flex-2"
              >
                {user ? (
                  <div className="w-12 h-12 rounded-full border-2  border-primary ">
                    {user?.photoURL ? (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    ) : (
                      <h2 className="text-2xl uppercase">{user?.email[0]}</h2>
                    )}
                  </div>
                ) : (
                  <button className="btn btn-primary">
                    <Link to={"/signin"}>Log In</Link>
                  </button>
                )}
              </div>
              {user && (
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="mt-5 btn btn-primary flex items-center justify-center"
                    >
                      <span className=" text-center ">Dashboard</span>
                    </Link>
                  </li>

                  <li className="mt-3">
                    <div
                      className="  w-full py-3 rounded-full text-white font-semibold text-base bg-red-600 flex items-center justify-center hover:bg-red-600 hover:shadow-sm hover:shadow-red-600 "
                      onClick={() => logOut()}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
