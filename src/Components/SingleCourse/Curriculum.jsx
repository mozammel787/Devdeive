/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { IoMdLock } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";

const Curriculum = ({ milestone, milestoneList }) => {
  console.log(milestoneList);
  return (
    <div className=" space-y-5">
      <div className="collapse bg-neutral shadow ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">{milestone}</div>
        <div className="collapse-content">
          {milestoneList.map((data,i) => (
            <div key={i} className="flex items-center justify-between border-t py-3">
              <div className="flex items-center gap-3">
                <IoVideocam className="text-primary text-xl " />
                {data.title}
              </div>
              <div className="flex items-center gap-3">
                30:20
                <IoMdLock className="text-gray-400 text-xl " />
              </div>
            </div>
          ))}
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
