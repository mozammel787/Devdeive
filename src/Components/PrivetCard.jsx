/* eslint-disable react/prop-types */
import { FaRegCircleUser, FaRegClock, FaStar } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
import { Link } from "react-router-dom";
const PrivetCard = ({ course }) => {
  const {
    title,
    category,
    totalLessons,
    totalDuration,
    author,
    totalReview,
    rating,
    price,
    thailand,
    _id,
  } = course;

  const handelDelete = async () => {
    const token = localStorage.getItem("token");

    await fetch(`https://devdrive-server.onrender.com/course/delete/${_id}`, {
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
            src={thailand}
            alt="Shoes"
          />
          <div className="bg-gradient-to-r from-primary to-[#41ce79]  font-semibold absolute bottom-5 left-5 px-4 py-2 rounded-lg text-white shadow-xl">
            {category}
          </div>
          <Link
            to={`courses/edit/${_id}`}
            className="bg-gradient-to-r from-primary to-[#41ce79]  font-semibold absolute top-5 right-5 px-4 py-2 rounded-lg text-white shadow-xl"
          >
            Edit
          </Link>
        </figure>
        <div className="card-body pt-7 px-4 pb-4">
          <h2 className="card-title font-semibold text-3xl hover:text-primary cursor-pointer">
            {title}
          </h2>
          <hr className="my-3" />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex justify-start items-center gap-3 text-lg font-medium w-[45%]">
              <MdOutlinePlayLesson />
              {totalLessons} Lessons
            </div>
            <div className="flex justify-end items-center gap-3 text-lg font-medium w-[45%]">
              <FaRegClock />
              {totalDuration}{" "}
            </div>
            <div className="flex justify-start items-center gap-3 text-lg font-medium w-[45%]">
              <FaRegCircleUser />
              {author}
            </div>
            <div className="flex justify-end items-center gap-3 text-lg font-medium w-[45%]">
              <FaStar />
              {totalReview} ({rating}){" "}
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center ">
            <button className="btn btn-primary">
              <Link to={`/courses/${_id}`}>Enroll Now</Link>
            </button>
            <button onClick={() => handelDelete()} className="btn bg-red-600">
              <Link to={`/courses/${_id}`}>Delete Now</Link>
            </button>
            <h4 className="font-semibold text-2xl text-primary">$ {price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivetCard;
