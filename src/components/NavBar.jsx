import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav
      className={`flex justify-between items-center px-20 py-5 text-sm fixed top-0 left-0 right-0 text-white z-30 bg-black/40`}
    >
      <HiOutlineMenuAlt4 className=" text-2xl" />
      <img
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724924967/car-rental/Heading_zfvtr5.png"
        alt=""
        className="h-3"
      />

      <div className="flex border border-white rounded-2xl px-4 py-1.5 gap-1 ">
        <button className="hover:border-b hover:border-b-white cursor-pointer">
          Login
        </button>
        <span>/</span>
        <button className="hover:border-b hover:border-b-white cursor-pointer">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
