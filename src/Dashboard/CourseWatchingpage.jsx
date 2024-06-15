import { Video } from "@triyanox/react-video";
import { IoVideocam } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const CourseWatchingpage = () => {
  const course = useLoaderData();
  const {
    title,
    thumPhotoUrl,
    thumVideoUrl,

    milestone,
    milestoneList,
    description,
    author,
  } = course;

  const videoProps = {
    src: thumVideoUrl,
    poster: thumPhotoUrl,
    title: title,
    subtitle: author,
    autoPlay: true,
    loop: true,
  };
  return (
    <div className="my-10 mx-auto container">
      <div className="flex mt-20 justify-between items-start">
        <div className="w-[62%]">
          <h2 className="text-4xl font-bold text-secondary mb-5">{title}</h2>
          <Video className="shadow rounded-xl" {...videoProps} />

          <div className="">
            <div className=" bg-neutral rounded-xl shadow my-10 p-8">
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="ig-tw"
              ></div>
            </div>
          </div>
        </div>
        <div className="w-[35%] mt-16 rounded-xl border bg-neutral h-full p-10">
          <div className=" space-y-5">
            <div className="collapse bg-neutral shadow ">
              <input type="checkbox" checked/>
              <div className="collapse-title text-xl font-medium">
                {milestone}
              </div>
              <div className="collapse-content">
                {milestoneList.map((data, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-t py-5"
                  >
                    <Link className="flex items-center gap-3">
                      <IoVideocam className="text-primary text-xl " />
                      {data.title}
                    </Link>
                    <div className="flex items-center gap-3">
                      30:20
                      {/* <IoMdLock className="text-gray-400 text-xl " /> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="collapse bg-neutral shadow ">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Basic Concepts
              </div>
              <div className="collapse-content">
                <div>Basic Concepts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWatchingpage;
