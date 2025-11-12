function Sidebar() {
  return (
    <div className="hidden md:inline-grid md:col-span-1">
      <div className="fixed w-[380px] pt-10 lg:pt-15 pl-7 lg:pl-10">
        <div className="flex gap-5 ">
          <img
            src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
            alt="pfp"
            className="rounded-full border border-stone-200 p-0.5 w-13 h-13"
          />

          <div className="flex justify-between w-full">
            <div className="flex flex-col self-center">
              <h1 className="text-md font-semibold">janedoe111</h1>
              <p className="text-sm text-stone-400">Welcome to Instagram</p>
            </div>

            <button className="hidden lg:block text-blue-400 cursor-pointer border-none">
              Sign out
            </button>
          </div>
        </div>
        <div className="flex  flex-col mt-5 mb-4 gap-3">
          <div className="flex justify-between w-full">
            <p className="text-stone-400 font-semibold">Suggested for you</p>
            <button className="hidden lg:block text-stone-700 cursor-pointer border-none">
              See all
            </button>
          </div>
          <div className="flex gap-5">
            <img
              src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
              alt="pfp"
              className="rounded-full border border-stone-200 p-0.5 w-11 h-11"
            />

            <div className="flex justify-between w-full">
              <div className="flex flex-col self-center">
                <h1 className="text-md font-semibold">lili.pat</h1>
                <p className="text-sm text-stone-400">Manager</p>
              </div>

              <button className="hidden lg:block text-blue-400 cursor-pointer border-none">
                Follow
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <img
              src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
              alt="pfp"
              className="rounded-full border border-stone-200 p-0.5 w-11 h-11"
            />

            <div className="flex justify-between w-full">
              <div className="flex flex-col self-center">
                <h1 className="text-md font-semibold">sara.mj</h1>
                <p className="text-sm text-stone-400">Manager</p>
              </div>

              <button className="hidden lg:block text-blue-400 cursor-pointer border-none">
                Follow
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <img
              src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
              alt="pfp"
              className="rounded-full border border-stone-200 p-0.5 w-11 h-11"
            />

            <div className="flex justify-between w-full">
              <div className="flex flex-col self-center">
                <h1 className="text-md font-semibold">daveboot</h1>
                <p className="text-sm text-stone-400">Engineer</p>
              </div>

              <button className="hidden lg:block text-blue-400 cursor-pointer border-none">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
