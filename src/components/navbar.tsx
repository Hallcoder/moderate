import { MdMenu, MdSettings } from "react-icons/md";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between w-9/12 mb-4">
      <span className="text-2xl font-bold">MonitorMe</span>
      {JSON.parse(localStorage.getItem("loggedInUser")!) ? (
        <span className="text-xl hover:bg-gray-300 rounded-md p-2">
          <MdMenu className="cursor-pointer" />
        </span>
      ) : (
        <button onClick={() => navigate('/auth')} className="bg-primary text-white font-seemibold p-2 rounded-md">Log In</button>
      )}
    </nav>
  );
}

export default NavBar;
