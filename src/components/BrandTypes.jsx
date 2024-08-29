/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

const BrandTypes = ({ title }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-xl">{title}</p>
        <span className="flex gap-2 items-center">
          <p className="text-sm font-semibold">View all</p> <FaArrowRight className="" />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 grid-rows-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 rounded-md py-6 px-14 bg-[#0F0F0F]/5 hover:cursor-pointer hover:bg-[#0F0F0F]/10 "
          >
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724930781/car-rental/Vector_oafm3x.png"
              alt=""
              className="h-8 w-fit"
            />
            <p>Toyota</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTypes;
