import { ChevronDown } from "lucide-react";
interface ModelCardProps {
  title: string;
  bgImageUrl: string;
  hasBounceButton: boolean;
}
function ModelCard({ title, bgImageUrl, hasBounceButton }: ModelCardProps) {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="pt-40 flex flex-col gap-3 w-screen items-center">
        <h1 className="text-7xl">{title}</h1>
        <p className="text-xl text-gray-200">
          Order Online for{" "}
          <span className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Touchless Delivery
          </span>
        </p>
      </div>
      <div className="flex mt-120  lg:mt-140 flex-col w-screen items-center gap-20">
        <div className="flex flex-col lg:flex-row  items-center lg:justify-center gap-5">
          <button className="cursor-pointer w-100  py-3 bg-neutral-800 text-gray-100 rounded-4xl uppercase">
            Custom Order
          </button>
          <button className="w-100 cursor-pointer  py-3 bg-gray-100 rounded-4xl uppercase">
            Exsisting inventory
          </button>
        </div>
        {hasBounceButton && (
          <ChevronDown size={50} className="animate-bounce text-gray-100" />
        )}
      </div>
    </div>
  );
}

export default ModelCard;
