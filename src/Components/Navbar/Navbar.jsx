import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user-icon.svg";

const Navbar = () => {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="DineOut logo" className="mr-2" />
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img src={userIcon} alt="User profile" className="h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
