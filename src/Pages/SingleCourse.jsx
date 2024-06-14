import { Video } from "@triyanox/react-video";
import { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { IoStar, IoVideocam } from "react-icons/io5";
import Curriculum from "../Components/SingleCourse/Curriculum";
import Instructor from "../Components/SingleCourse/Instructor";
import Reviews from "../Components/SingleCourse/Reviews";
import { FaChartLine, FaRegClock } from "react-icons/fa6";
import { MdCalendarToday } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { RiGroupLine } from "react-icons/ri";

const SingleCourse = () => {
  const [activeTabIndex, setActiveTabIndex] = useState("Overview");

  const videoProps = {
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://softivuspro.com/html/edufast/edufast/assets/images/common/ex3.png",
    title: "My Amazing Video",
    subtitle: "An insightful subtitle",
    autoPlay: true,
    loop:true
  };
  return (
    <div className="my-32 mx-auto container">
      <div className="flex mt-20 justify-between items-start">
        <div className="w-[62%]">
        <h2 className="text-4xl font-bold text-secondary mb-5">
        Professional Ceramic Moulding for Beginners
      </h2>
          <Video className="shadow rounded-xl" {...videoProps} />
          <div className="flex items-center justify-between">
            <div className="flex items-center  my-5 gap-3 ">
              <img
                className="w-20 h-20 rounded-full border-2  border-primary "
                src="https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2-150x150.jpg"
                alt=""
              />

              <div className="flex flex-col gpa-2">
                Instructor:
                <span className="text-lg font-semibold">Motasim Billah</span>
              </div>
            </div>
            <div className="flex items-center  px-10  border-x">
              <BiSolidCategory className="text-primary text-3xl mr-5" />
              <p className="flex flex-col ">
                Category:
                <span className="text-lg font-semibold">Data Science</span>
              </p>
            </div>
            <div className="flex items-center  px-10 gpa-2">
              <IoVideocam className="text-primary text-3xl mr-5" />
              <p className="flex flex-col ">
                Lessons :<span className="text-lg font-semibold "> 20</span>
              </p>
            </div>
            <div className="flex items-center px-10 gpa-2 border-l">
              <IoStar className="text-primary text-3xl mr-5" />
              <p className="flex flex-col ">
                Ratings :
                <span className="text-lg font-semibold"> 4.3 (46)</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3 p-4 bg-neutral rounded-2xl">
            <button
              className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
                "Overview" === activeTabIndex
                  ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
                  : "text-gray-600 "
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex("Overview")}
            >
              Overview
            </button>
            <button
              className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
                "Curriculum" === activeTabIndex
                  ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
                  : "text-gray-600 "
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex("Curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
                "Instructor" === activeTabIndex
                  ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
                  : "text-gray-600 "
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex("Instructor")}
            >
              Instructor
            </button>
            <button
              className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
                "Reviews" === activeTabIndex
                  ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
                  : "text-gray-600 "
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex("Reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="py-4">
            {activeTabIndex === "Overview" && <div className=" bg-neutral rounded-xl shadow mt-5 p-5">Overview</div>}
            {activeTabIndex === "Curriculum" && (
              <div>
                <Curriculum />
              </div>
            )}
            {activeTabIndex === "Instructor" && (
              <div>
                <Instructor />
              </div>
            )}
            {activeTabIndex === "Reviews" && (
              <div>
                <Reviews />
              </div>
            )}
          </div>
        </div>
        <div className="w-[30%]">
          <div className="bg-neutral  p-5 rounded-xl">
            <div className="relative ">
              <img
                className="rounded-xl w-full mb-5 shadow"
                src="https://softivuspro.com/html/edufast/edufast/assets/images/common/ex3.png"
                alt=""
              />
              <p className="text-3xl font-bold bg-primary text-white absolute bottom-0 right-0 p-3 rounded-br-xl  rounded-tl-xl">
                Price : $ 99{" "}
              </p>
            </div>

            <div className="px-3 py-5">
              <div className="flex justify-between items-center border-y py-4">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <FaChartLine className="text-primary text-2xl " />
                  Course Level
                </p>
                <p className="text-lg ">Beginner</p>
              </div>
              <div className="flex justify-between items-center border-b py-4">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <GrLanguage className="text-primary text-2xl " />
                  Language
                </p>
                <p className="text-lg ">English</p>
              </div>
              <div className="flex justify-between items-center border-b py-4">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <FaRegClock className="text-primary text-2xl " />
                  Duration
                </p>
                <p className="text-lg ">9 week</p>
              </div>
              <div className="flex justify-between items-center border-b py-4">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <RiGroupLine className="text-primary text-2xl " />
                  Students
                </p>
                <p className="text-lg ">4k</p>
              </div>
              <div className="flex justify-between items-center border-b py-4">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <MdCalendarToday className="text-primary text-2xl " />
                  Deadline
                </p>
                <p className="text-lg ">10 Dec</p>
              </div>

              <button className="btn btn-primary w-full mt-5">
                Enroll Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
