import BrandTypes from "./BrandTypes";

const BrandSection = () => {
  return (
    <div className="bg-white h-screen w-screen p-20 mt-16 flex flex-col gap-20 justify-between">
      <BrandTypes title="Rent by Brands" />
      <BrandTypes title="Rent by body type"  />
    </div>
  );
};

export default BrandSection;
