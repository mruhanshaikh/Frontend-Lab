import { RiBookmarkLine } from "@remixicon/react";
import { RiBookmarkFill } from "@remixicon/react";

const Card = (details) => {
  return (
    <div className="card">
      {/* FIRST ROW */}
      <div className="flex  justify-between w-full">
        <div>
          <div className="w-[50px] flex justify-center items-center border-2 border-solid border-gray-300 h-[50px] rounded-full">
            <span className="flex items-center">
              {details.logo}
            </span>
          </div>
        </div>
        <div>
          <div className="flex  group items-center outline-1 outline-gray-300 py-0.5 px-2 hover:bg-gray-300 transition duration-300 ease-in rounded-lg">
            <span className="text-gray-500">Save</span>
            <span className="group-hover:text-gray-50 cursor-pointer">
              {/* conditional rendering */}
              {details.bookmark?<RiBookmarkLine size={18} color="gray" />:<RiBookmarkFill size={18} color="gray" />}
            </span>
          </div>
        </div>
      </div>
      {/* SECOND ROW */}
      <div>
        <div className="flex gap-1 items-center">
          <span className="font-[600] text-[18px] capitalize">{details.company}</span>
          <span className="text-[12px] text-gray-500">{details.postedDaysAgo} days ago</span>
        </div>
        <div className="font-[700] text-[20px] capitalize">{details.position}</div>
        <div className="mt-2 font-[500] text-[12px] text-gray-600 flex gap-[1rem] items-center">
          <span className=" bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-200 transition duration-300 ease-out cursor-pointer capitalize">{details.tag0}</span>
          <span className=" transition duration-300 ease-out  hover:bg-gray-200 bg-gray-300 px-3 py-1 rounded-lg cursor-pointer capitalize">
            {details.tag1}
          </span>
        </div>
      </div>
      {/* THIRD ROW */}
      <div className="flex flex-col gap-[1.5rem]">
        <div className="border-t border-t-gray-200"></div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[18px] font-bold">{details.salary}</span>
            <span className="text-[12px] text-gray-500 capitalize">{details.location}</span>
          </div>
          <button className="hover:scale-[1.1] transition duration-300 ease-in hover:bg-black/60 bg-black text-[14px] py-1.5 px-3 rounded-lg text-white cursor-pointer border-none capitalize">
            Apply now 
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
