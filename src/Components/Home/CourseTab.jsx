/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import TabContent from "./TabContent";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

const cat = [
  {
    category: "HTML",
  },
  {
    category: "React",
  },
  {
    category: "PHP",
  },
  {
    category: "Node",
  },
];

const CourseTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/course");
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-between items-center my-16">
      
          <div className="inline-flex gap-3 border border-primary rounded-full items-center py-2 px-6 mb-4 font-semibold text-xl">
            <FaStar className="text-primary" />
            <p>Courses</p>
          </div>
          <h2 className=" font-semibold text-5xl  text-secondary">
            Explore Our Courses And Build Skills
          </h2>
        

        
      </div>
      <div className="flex justify-between space-x-3 p-4 bg-neutral rounded-2xl">
        <div className="flex space-x-3 ">
          {/* Loop through tab data and render button for each. */}
          {cat.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
                  idx === activeTabIndex
                    ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
                    : "text-gray-600 "
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.category}
              </button>
            );
          })}
        </div>
        <button className=" font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl text-white bg-gradient-to-r from-primary to-[#41ce79]">
          <Link to={"courses"}>  See All Courses</Link>
        
        </button>
      </div>

      {/* Show active tab content. */}
      <div className="py-4">
        <TabContent
          activeCategory={course[activeTabIndex]?.category}
          tabsData={course}
        ></TabContent>
      </div>
    </div>
  );
};

export default CourseTab;
