import { useEffect, useState } from "react";
import axios from "axios";
import Lading from "../Components/Lading";
import useAuth from "../Hook/useAuth";
import EnrolledCard from "../Components/EnrolledCard";

const EnrolledCourses = () => {
  const [data, setData] = useState([]);
  const [lode, setLode] = useState(false);
  const {user} = useAuth();
  useEffect(() => {
    setLode(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devdrive-server.onrender.com/user/${user?.email}`
        );
        setData(response.data?.enrolledCourses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setLode(false);
  }, [user]);

  if (lode) {
    return <Lading />;
  }
console.log(data);
 
  return (
    <div className="container mx-auto my-36  p-5 sm:p-0">
      <h2 className=" font-semibold text-5xl text-center ">Enrolled Courses</h2>
     
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5">
        {data?.map((item, i) => (
          <EnrolledCard key={i} course={item}></EnrolledCard>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
