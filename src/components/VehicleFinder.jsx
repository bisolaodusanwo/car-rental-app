import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const VehicleFinder = () => {
  return (
    <div className="absolute -bottom-14 z-10 drop-shadow-xl flex items-end justify-center gap-4 py-5 px-5 rounded-2xl w-fit bg-[#e7e7e7]">
      <div className="flex flex-col text-base gap-2 ">
        <label htmlFor="">Pick-up Location</label>
        <div className="relative w-fit">
          <IoLocationOutline className="absolute top-2.5 left-1 text-xl" />
          <input
            type="text"
            placeholder="Search a location"
            className=" border border-black/10 pl-8  py-2 rounded-lg w-fit placeholder:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col text-base gap-2 ">
        <label htmlFor="">Pick-up Date</label>
        <input
          type="date"
          placeholder="Search a location"
          className=" border border-black/10 px-3 py-2 rounded-lg w-fit placeholder:text-black"
        />
      </div>
      <div className="flex flex-col text-base gap-2 ">
        <label htmlFor="">Drop-off Location</label>
        <div className="relative w-fit">
          <IoLocationOutline className="absolute top-2.5 left-1 text-xl" />
          <input
            type="text"
            placeholder="Search a location"
            className=" border border-black/10 pl-8  py-2 rounded-lg w-fit placeholder:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col text-base gap-2 ">
        <label htmlFor="">Drop-off Date</label>
        <input
          type="date"
          placeholder="Search a location"
          className=" border border-black/10 px-3 py-2 rounded-lg w-fit placeholder:text-black"
        />
      </div>
      <button className="flex items-center h-fit justify-center gap-2 text-white bg-black rounded-2xl px-5 py-3">
        Find a Vehicle <FaArrowRight />
      </button>
    </div>
  );
};

export default VehicleFinder;
