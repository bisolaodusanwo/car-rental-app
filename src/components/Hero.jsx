import VehicleFinder from "./VehicleFinder";

const Hero = () => {
  return (
    <div className={`flex flex-col items-center relative`}>
      <h1 className="absolute z-20 text-5xl font-bold text-white text-center top-32">
        Discover the world on wheels <br /> with our car rental service
      </h1>
      <img
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724926825/car-rental/image_23_1_oqmd2f.png"
        alt=""
      />
      <VehicleFinder />
    </div>
  );
};

export default Hero;
