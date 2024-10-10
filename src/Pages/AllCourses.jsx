import { useEffect, useState } from "react";
import CourseCard from "../Components/CourseCard";
import axios from "axios";
import Lading from "../Components/Lading";
import courseList from '../../assets/course.json'

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [course, setCourse] = useState(courseList);
  const [lode, setLode] = useState(false);
   
  useEffect(() => {
    setLode(true)
    const fetchData = async () => {
      try {
        const response = await axios.get("https://devdrive-server.onrender.com/course");
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setLode(false)
  }, []);

  

    if (lode) {
      return <Lading/>;
    }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //   Function to filter the data based on the search term
  const filteredData = course?.filter((item) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredData);
  return (
    <div className="container mx-auto my-36  p-5 sm:p-0">
      <h2 className=" font-semibold text-5xl text-center ">
        Explore Our Courses <br /> And Build Skills
      </h2>
      <label className="max-w-5xl mx-auto md:my-10 input input-bordered border-gray-300 focus:border-0 focus:outline-none flex items-center gap-2  rounded-full pl-5 pr-2">
        <input
          type="text"
          className="grow focus:outline-none focus:border-0 "
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-8 h-8  bg-gradient-to-b from-primary to-[#41ce79]  rounded-full text-white p-1"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5">
        {filteredData.map((item, i) => (
          <CourseCard key={i} course={item}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
