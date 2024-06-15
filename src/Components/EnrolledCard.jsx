/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const EnrolledCard = ({ course }) => {
  const { title, category, author, thumPhotoUrl, _id } = course;

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
          <Link
            to={`/dashboard/courses/edit/${_id}`}
            className="bg-gradient-to-r from-primary to-[#41ce79]  font-semibold absolute top-5 right-5 px-4 py-2 rounded-lg text-white shadow "
          >
            Edit
          </Link>
        </figure>
        <div className="card-body pt-7 px-4 pb-4">
          <Link to={`/courses/${_id}`}>
            <h2 className="card-title font-semibold text-3xl hover:text-primary cursor-pointer">
              {title}
            </h2>
          </Link>

          <hr className="my-3" />

          <div className=" gap-4">
            {author}
            <progress
              className="progress progress-primary bg-neutral w-full"
              value="40"
              max="100"
            ></progress>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center ">
            <button className="btn btn-primary">
              <Link to={`/dashboard/courses/watch/${_id}`}>Watch Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCard;
