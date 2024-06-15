/* eslint-disable react/no-unknown-property */
import {   NavLink, Outlet } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useAuth from "../Hook/useAuth";
import { IoAddCircleOutline, IoCartOutline, IoHomeOutline, IoRocketOutline, IoSearchOutline } from "react-icons/io5";
import { PiVideoLight } from "react-icons/pi";

const PrivateLayout = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Header />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden absolute top-5 left-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-white"
            >
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex flex-col justify-between h-full p-3 w-60 bg-neutral text-gray-800 pt-28">
            <div className="space-y-3">
              
        
              <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-5 text-sm">
                  <li className="rounded-full text-lg font-medium px-3 py-1 text-gray-600 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow  ">
                    <NavLink 
                    to={"/dashboard"}
                      rel="noopener noreferrer"
                      
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                    <IoHomeOutline  className="text-2xl " />
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow  ">
                    <NavLink to={"search"}
                      rel="noopener noreferrer"
                     
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     
                      <IoSearchOutline className="text-2xl " />
                      <span>Search</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow ">
                    <NavLink to={"enrolled-courses"}
                      rel="noopener noreferrer"
                      
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     <PiVideoLight   className="text-2xl " />
                      <span>Enrolled Courses</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow ">
                    <NavLink to={"Order-history"}
                      rel="noopener noreferrer"
                      
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     <IoCartOutline className="text-2xl " />
                      <span>Order History</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow ">
                    <NavLink
                      rel="noopener noreferrer"
                      to={"my-courses"}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     <IoRocketOutline  className="text-2xl "/>
                      <span>My Courses</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-gradient-to-r hover:from-primary hover:to-[#41ce79] hover:text-white hover:shadow ">
                    <NavLink
                      rel="noopener noreferrer"
                      to={"add-courses"}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <IoAddCircleOutline className="text-2xl "/>
                      <span>Add Courses</span>
                    </NavLink>
                  </li>
                  <li className="rounded-full text-lg font-medium px-3 py-1 hover:bg-red-600 hover:text-white hover:shadow">
                    <button onClick={()=>logOut()}
                      rel="noopener noreferrer"
                      
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current "
                      >
                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                        <rect width="32" height="64" x="256" y="232"></rect>
                      </svg>
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
              <img
                src={user.photoURL}
                alt=""
                className="w-12 h-12 rounded-full border-3 border-primary"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.displayName}</h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PrivateLayout;
