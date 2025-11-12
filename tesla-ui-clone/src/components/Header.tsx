import logo from "../assets/logo.svg";
function Header() {
  return (
    <div className="bg-gray-100 fixed w-screen z-10">
      <div className="p-5 flex justify-between items-center">
        <img src={logo} alt="tesla" className="w-32 cursor-pointer" />

        <ul className="hidden lg:flex gap-7">
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Model S
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Model 3
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Model X
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Model Y
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Solar Roof
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Solar Panels
          </li>
        </ul>

        <ul className="flex gap-7">
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Shop
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Account
          </li>
          <li className="cursor-pointer hover:bg-gray-300/50 px-2 rounded-2xl transition-colors">
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
