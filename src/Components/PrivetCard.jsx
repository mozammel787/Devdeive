/* eslint-disable react/prop-types */
import { FaRegClock, FaStar } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";

import { Link } from "react-router-dom";
const PrivetCard = ({ course }) => {
  const {
    title,
    category,
    lessons,
    duration,
    author,
    price,
    thumPhotoUrl,
    authorPhoto,
    _id,
  } = course;

  const handelDelete = async () => {
    const token = localStorage.getItem("token");

    await fetch(`https://devdrive-server.vercel.app/course/delete/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Beare ${token}`,
      },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
       <div className="card w-[32%] bg-base-100 shadow-sm p-4 border hover:shadow-md">
        <figure className="relative">
          <img
            className="w-full rounded-xl shadow"
            src={thumPhotoUrl}
            alt="Shoes"
          />
          <div className="bg-gradient-to-r from-primary to-[#41ce79]  font-semibold absolute bottom-5 left-5 px-4 py-2 rounded-lg text-white shadow">
            {category}
          </div>
          <Link to={`/dashboard/courses/edit/${_id}`} className="bg-gradient-to-r from-primary to-[#41ce79]  font-semibold absolute top-5 right-5 px-4 py-2 rounded-lg text-white shadow ">Edit</Link>
        </figure>
        <div className="card-body pt-7 px-4 pb-4">
          <Link to={`/courses/${_id}`}>
          <h2 className="card-title font-semibold text-3xl hover:text-primary cursor-pointer">
            {title}
          </h2>
          </Link>
         
          <hr className="my-3" />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex justify-start items-center gap-2 text-base font-medium w-[48%]">
              <IoVideocam className="text-xl" />
              {lessons} Lessons
            </div>
            <div className="flex justify-end items-center gap-2 text-base font-medium w-[48%]">
              <FaRegClock className="text-xl" />
              {duration}{" "}
            </div>
            <div className="flex justify-start items-center gap-2 text-base font-medium w-[48%]">
              <img
                alt="Tailwind CSS Navbar component"
                src={authorPhoto}
                className="w-8 h-8 rounded-full border border-primary"
              />
              {author}
            </div>
            <div className="flex justify-end items-center gap-2 text-base font-medium w-[48%]">
              <FaStar className="text-xl" />
              4.1(43)
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center ">
            <button onClick={() => handelDelete()} className="px-7  py-3 rounded-full text-white font-semibold text-base bg-red-600 flex items-center justify-center hover:bg-red-600 hover:shadow-sm hover:shadow-red-600 ">
             Delete Now
            </button>
            <h4 className="font-semibold text-2xl text-primary">$ {price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivetCard;
