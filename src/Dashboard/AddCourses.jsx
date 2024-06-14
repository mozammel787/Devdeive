import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../Hook/useAuth";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCourses = () => {
  const { user } = useAuth();
  const [category, setCategory] = useState("");
  const [lave, setLave] = useState("");
  const [dis, setDis] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;

    const title = form?.title?.value;
    const thumPhotoUrl = form?.thumPhotoUrl?.value;
    const thumVideoUrl = form?.thumVideoUrl?.value;
    const price = form?.price?.value;
    const lessons = form?.lessons?.value;
    const duration = form?.duration?.value;
    const deadline = form?.deadline?.value;
    const milestone = form?.milestone?.value;
    const videoTitleOne = form?.videoTitleOne?.value;
    const videoUrlOne = form?.videoUrlOne?.value;
    const videoTitleTwo = form?.videoTitleTwo?.value;
    const videoUrlTwo = form?.videoUrlTwo?.value;
    const videoTitleThree = form?.videoTitleThree?.value;
    const videoUrlThree = form?.videoUrlThree?.value;
    const videoTitleFore = form?.videoTitleFore?.value;
    const videoUrlFore = form?.videoUrlFore?.value;
    const videoTitleFive = form?.videoTitleFive?.value;
    const videoUrlFive = form?.videoUrlFive?.value;

    const author = user?.displayName;
    const authorPhoto = user?.photoURL;
    const authorEmail = user?.email;
    const description = dis;

    const course = {
      title,
      thumPhotoUrl,
      thumVideoUrl,
      lave,
      price,
      lessons,
      duration,
      deadline,
      milestone,
      milestoneList: [
        {
          videoTitleOne,
          videoUrlOne,
        },
        {
          videoTitleTwo,
          videoUrlTwo,
        },
        {
          videoTitleThree,
          videoUrlThree,
        },
        {
          videoTitleFore,
          videoUrlFore,
        },
        {
          videoTitleFive,
          videoUrlFive,
        },
      ],
      description,
      author,
      category,
      authorPhoto,
      authorEmail,
    };

    console.log(course);

    await fetch("https://devdrive-server.onrender.com/course/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Beare ${token}`,
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully toasted!");
          navigate(`/dashboard}`);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="mt-28 w-[70vw]">
      <div className="p-2 md:p-4 ">
        <div className=" mx-auto px-6 pb-8 mt-8 ">
          <h2 className="pl-6 text-2xl text-center font-bold sm:text-5xl">
            Add Courses
          </h2>

          <div className="  mx-auto mt-8">
            <form
              onSubmit={handelSubmit}
              className="items-center sm:mt-5 text-[#000]"
            >
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail photo URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm border focus:outline-none focus:border-gray-400 focus:bg-white">
                  <input
                    type="url"
                    name="thumPhotoUrl"
                    className="w-full px-8 py-4 font-medium bg-gray-100   placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
                    placeholder="www.example.com"
                  />
                </div>
              </div>
              <div className="mb-5 md:mb-2 col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail Video URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm border focus:outline-none focus:border-gray-400 focus:bg-white">
                  <input
                    type="url"
                    name="thumVideoUrl"
                    className="w-full px-8 py-4 font-medium bg-gray-100   placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
                    placeholder="www.example.com"
                  />
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row gap-10">
                <div className="mb-5 md:mb-2 sm:my-6 w-[50%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Category
                  </label>
                  <div className="flex flex-col md:flex-row md:gap-5">
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">HTML</span>
                        <input
                          type="radio"
                          name="Category"
                          value="HTML"
                          checked={category === "HTML"}
                          onChange={() => setCategory("HTML")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">React</span>
                        <input
                          type="radio"
                          name="Category"
                          value="react"
                          checked={category === "react"}
                          onChange={() => setCategory("react")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">PHP</span>
                        <input
                          type="radio"
                          name="Category"
                          value="PHP"
                          checked={category === "PHP"}
                          onChange={() => setCategory("PHP")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">Node</span>
                        <input
                          type="radio"
                          name="Category"
                          value="node"
                          checked={category === "node"}
                          onChange={() => setCategory("node")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">Laravel </span>
                        <input
                          type="radio"
                          name="Category"
                          value="Laravel "
                          checked={category === "Laravel "}
                          onChange={() => setCategory("Laravel ")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-5 md:mb-2 sm:my-6 w-[50%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Course Level
                  </label>
                  <div className="flex flex-col md:flex-row md:gap-5">
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">Beginner</span>
                        <input
                          type="radio"
                          name="lave"
                          value="beginner"
                          checked={lave === "beginner"}
                          onChange={() => setLave("beginner")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">Mid-lave</span>
                        <input
                          type="radio"
                          name="lave"
                          value="mid-lave"
                          checked={lave === "mid-lave"}
                          onChange={() => setLave("mid-lave")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text">Advance</span>
                        <input
                          type="radio"
                          name="lave"
                          value="advance"
                          checked={lave === "advance"}
                          onChange={() => setLave("advance")}
                          className="radio checked:bg-primary"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row gap-10 justify-between">
                <div className="mb-5 md:mb-2 sm:mb-6 w-[25%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                </div>
                <div className="mb-5 md:mb-2 sm:mb-6 w-[25%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Total Lessons
                  </label>
                  <input
                    type="number"
                    name="lessons"
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                </div>
                <div className="mb-5 md:mb-2 sm:mb-6 w-[25%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                </div>
                <div className="mb-5 md:mb-2 sm:mb-6 w-[25%]">
                  <label className="block mb-2 text-sm font-medium ">
                    Deadline
                  </label>
                  <input
                    type="text"
                    name="deadline"
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                </div>
              </div>
              <div className="mb-5 md:mb-2">
                <label className="block mb-2 text-sm font-medium ">
                  Description
                </label>

                <CKEditor
                  className="tailwind-ignore"
                  editor={ClassicEditor}
                  data=""
                  config={{
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "blockQuote",
                      "undo",
                      "redo",
                    ],
                  }}
                  onChange={(event, editor) => {
                    setDis(editor.getData());
                  }}
                />
              </div>

              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Milestone
                </label>
                <input
                  type="text"
                  name="milestone"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video title one
                </label>
                <input
                  type="text"
                  name="videoTitleOne"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video URL one
                </label>
                <input
                  type="text"
                  name="videoUrlOne"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video title two
                </label>
                <input
                  type="text"
                  name="videoTitleTwo"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video URL two
                </label>
                <input
                  type="text"
                  name="videoUrlTwo"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video title three
                </label>
                <input
                  type="text"
                  name="videoTitleThree"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video URL three
                </label>
                <input
                  type="text"
                  name="videoUrlThree"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video title fore
                </label>
                <input
                  type="text"
                  name="videoTitleFore"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video URL fore
                </label>
                <input
                  type="text"
                  name="videoUrlFore"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video title five
                </label>
                <input
                  type="text"
                  name="videoTitleFive"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Video URL five
                </label>
                <input
                  type="text"
                  name="videoUrlFive"
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <hr className="my-5" />

              <div className="flex justify-end">
                <button type="submit" className="  w-full">
                  <span className=" btn btn-primary w-full">Add Post</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
