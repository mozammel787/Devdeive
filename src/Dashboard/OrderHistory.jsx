import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import TableComponants from "../Components/TableComponants";

const OrderHistory = () => {
  const [activeTabIndex, setActiveTabIndex] = useState("enrolledOrderList");
  const [course, setCourse] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://devdrive-server.vercel.app/payment");
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const enrollCourse = course?.filter(
    (data) => data.customerEmail === user?.email
  );

  const sellCourse = course?.filter((data) => data.authorEmail === user?.email);

 

  return (
    <div>
      <div className="mt-28 flex items-center justify-center space-x-3 p-4 bg-neutral rounded-2xl">
        <button
          className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
            "enrolledOrderList" === activeTabIndex
              ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
              : "text-gray-600 "
          }`}
          // Change the active tab on click.
          onClick={() => setActiveTabIndex("enrolledOrderList")}
        >
          Enrolled order list
        </button>
        <button
          className={`font-semibold text-xl  px-8 py-4 transition-colors duration-300 rounded-2xl ${
            "sellingOrderList" === activeTabIndex
              ? "text-white bg-gradient-to-r from-primary to-[#41ce79]  "
              : "text-gray-600 "
          }`}
          // Change the active tab on click.
          onClick={() => setActiveTabIndex("sellingOrderList")}
        >
          Selling Order List
        </button>
      </div>

      <div className="py-4">
        {activeTabIndex === "enrolledOrderList" && (
          <div className=" bg-neutral rounded-xl shadow mt-5 p-2">
            <TableComponants Payments={enrollCourse} />
          </div>
        )}
        {activeTabIndex === "sellingOrderList" && (
          <div>
            <div className=" bg-neutral rounded-xl shadow mt-5 p-2">
              <TableComponants Payments={sellCourse} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
