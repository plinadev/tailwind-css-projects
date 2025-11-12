import { HomeIcon, PlusCircleIcon, SearchIcon } from "lucide-react";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-stone-50 px-5 lg:px-90 w-screen h-20 flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
        alt="instagram"
        className="w-10"
      />
      <div className="relative w-70 ">
        <div className=" absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
          <SearchIcon className=" w-5 text-stone-400" />
        </div>
        <input
          name="search"
          type="text"
          placeholder="Search..."
          className="w-full pl-10 border border-stone-300 focus-visible:outline-stone-500 bg-stone-100 rounded-md py-1.5 px-2"
        />
      </div>
      <div className="flex items-center gap-3">
        <HomeIcon className="hidden cursor-pointer hover:scale-125 transition-transform duration-200 ease-out md:block" />
        <PlusCircleIcon className=" cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <img
          src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
          alt="profile picture"
          className="w-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
