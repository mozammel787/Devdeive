import { FaAward, FaCircleCheck, FaPlay, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between hero h-screen my-auto container mx-auto">
      <div className="w-[40%]">
        <div className="inline-flex gap-3 border border-primary rounded-full items-center py-2 px-6 mb-4 font-semibold text-xl">
          <FaStar className="text-primary" />
          <p>Empower Your Journey</p>
        </div>
        <h1 className=" text-[80px] mb-4 font-semibold">
          Learn Beyond <br />
          Limits, <span className="text-ane ">Succeed</span>
        </h1>
        <p>
          Welcome to a new era of education! Unleash your potential, learn from
          experts, and grow with us.
        </p>
        <div className="flex items-center mt-4 gap-5">
          <button className="btn btn-primary"> <Link to={"/courses"}>Browse Courses</Link></button>
          <button className="bg-gradient-to-r from-primary to-[#41ce79] rounded-full w-[50px] h-[50px]  flex items-center justify-center"><FaPlay className="text-2xl text-white "/></button>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="relative ">
          <img className="w" src="New Project.png" alt="" />
          <div className="bg-gradient-to-r from-primary to-[#41ce79] shadow-xl rounded-full text-center text-white inline-flex items-center justify-center flex-col h-[155px] w-[155px] border-5 absolute bottom-28 left-40 animate-bounce	">
            <h3 className=" font-semibold text-3xl">3.6k+</h3>
            <p className="  text-lg">Students</p>
          </div>
          <div className="absolute  right-28 top-56 bg-white rounded-full border">
            <div className="relative inline-flex items-center justify-center flex-col h-[160px] w-[160px] p-3 ">
              <FaCircleCheck className="text-primary text-8xl absolute top-8 left-8 p-3 border rounded-full " />
              <img className=" amn-sp " src="Circle.png" alt="" />
            </div>
          </div>
          <div className="absolute  left-0 top-2/4 bg-accent  rounded-full border-4 border-white p-2">
            <FaPlay className="text-primary text-5xl bg-white  rounded-full p-3" />
          </div>
          <div className="absolute  right-0 top-2/4 bg-accent  rounded-full border-4 border-white p-2">
            <FaAward className="text-white text-5xl  rounded-full p-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
