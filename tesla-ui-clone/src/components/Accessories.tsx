function Accessories() {
  return (
    <div className="relative bg-gray-50 w-screen h-screen flex flex-col  overflow-hidden">
      <img
        src="https://shop.qmerit.com/cdn/shop/files/656vi8ob.png?v=1744836999&width=1214"
        alt=""
        className="absolute z-0 w-[800px] opacity-90 object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 top-30 flex flex-col items-center gap-3">
        <h1 className="text-7xl">Accessories</h1>
        <p className="text-xl text-gray-700">
          Order Online for{" "}
          <span className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Touchless Delivery
          </span>
        </p>
      </div>

      <div className="relative z-10 mt-180 flex flex-col lg:flex-row items-center justify-center gap-5">
        <button className="w-100 cursor-pointer  py-3 bg-neutral-800 text-gray-100 rounded-4xl uppercase">
          Custom Order
        </button>
      </div>
    </div>
  );
}

export default Accessories;
