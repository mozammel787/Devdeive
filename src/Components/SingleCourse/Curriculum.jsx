import { IoMdLock } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";

const Curriculum = () => {
  return (
    <div className=" space-y-5">
      <div className="collapse bg-neutral shadow ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Advance Concepts
        </div>
        <div className="collapse-content">
          <div>
            <div className="flex items-center justify-between border-t py-3">
              <div className="flex items-center gap-3">
                <IoVideocam className="text-primary text-xl " />
                1. Meal Planning Explained
              </div>
              <div className="flex items-center gap-3"> 
                30:20
                <IoMdLock className="text-gray-400 text-xl " />
              </div>
            </div>
            <div className="flex items-center justify-between border-t py-3">
              <div className="flex items-center gap-3">
                <IoVideocam className="text-primary text-xl " />
                2. Meal Planning Explained
              </div>
              <div className="flex items-center gap-3"> 
                30:20
                <IoMdLock className="text-gray-400 text-xl " />
              </div>
            </div>
            <div className="flex items-center justify-between border-t py-3">
              <div className="flex items-center gap-3">
                <IoVideocam className="text-primary text-xl " />
                3. Meal Planning Explained
              </div>
              <div className="flex items-center gap-3"> 
                30:20
                <IoMdLock className="text-gray-400 text-xl " />
              </div>
            </div>
            <div className="flex items-center justify-between border-t py-3">
              <div className="flex items-center gap-3">
                <IoVideocam className="text-primary text-xl " />
                4. Meal Planning Explained
              </div>
              <div className="flex items-center gap-3"> 
                30:20
                <IoMdLock className="text-gray-400 text-xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse bg-neutral shadow ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Basic Concepts</div>
        <div className="collapse-content">
          <div>Basic Concepts</div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
