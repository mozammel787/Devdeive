import { FaGlobe, FaStar } from "react-icons/fa6";
import { TbPigMoney, TbUsers, TbUsersGroup } from "react-icons/tb";
const BecomeanInstructor = () => {
  return (
    <div className="container mx-auto flex flex-row-reverse items-center justify-center gap-40 my-32">
      <div className="w-[40%]">
        <img className="mx-auto rounded-xl shadow-md" src="Instructor.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-5 text-secondary w-[40%]">
        <div className="inline-flex gap-3 border border-primary rounded-full items-center py-2 px-6 mb-4 font-semibold text-xl mr-auto">
          <FaStar className="text-primary" />
          <p>Inspired Instructor</p>
        </div>
        <h2 className=" font-semibold text-5xl  ">Become an Instructor</h2>
        <p>
          Top instructors from around the world teach millions of students on
          Edufast.
        </p>
        <div className="flex justify-between items-center  gap-4">
          <div className="flex justify-between  flex-col gap-4">
            <div className="flex justify-start items-center gap-3 ">
              <TbPigMoney className="text-5xl text-white rounded-full p-2 bg-gradient-to-b from-primary to-[#41ce79] " />
              <div>
                <h5 className="text-xl">Earn money</h5>
                <p>Earn from course sales.</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 ">
              <TbUsers className="text-5xl text-white rounded-full p-2 bg-gradient-to-b from-primary to-[#41ce79] " />
              <div>
                <h5 className="text-xl">Inspire students</h5>
                <p>Teach, empower, inspire growth.</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 ">
              <TbUsersGroup className="text-5xl text-white rounded-full p-2 bg-gradient-to-b from-primary to-[#41ce79] " />
              <div>
                <h5 className="text-xl">Join our community</h5>
                <p>Leverage our instructor community.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gradient-to-b from-primary to-[#41ce79]  text-white rounded-full justify-start items-center p-10 gap-2 relative" >
            <span className=" font-semibold text-5xl text-center ">5 K+</span>
            <span className="text-xl text-center">Worldwide</span> Satisfied
            <span className="text-xl text-center">Students</span>
            <FaGlobe className="bg-white text-primary rounded-full p-2 absolute top-0 right-0 text-6xl amn-sp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeanInstructor;
