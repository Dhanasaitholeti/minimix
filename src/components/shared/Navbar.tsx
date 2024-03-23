import { CiGrid42 } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="static flex gap-2 bg-backgroundNavbar border-b border-b-backgroundNavbar border px-10 py-3 justify-around items-center">
        <div className="flex gap-2">
          <CiGrid42 size={32} />
          <h1 className="text-3xl font-semibold">MiniMix</h1>
        </div>
        <div className="flex gap-6 font-medium">
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button>
            <Link to={"/signup"}>Signup</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
