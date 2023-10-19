import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut();
  };
  const menus = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 border-b-2 border-red-500"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addproduct"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 border-b-2 border-red-500"
            : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/mycart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 border-b-2 border-red-500"
            : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-slate-100 shadow-md py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box min-w-[200px] px-4 py-6 font-medium space-y-2 text-center"
          >
            {menus}
          </ul>
        </div>
        <Link>
          <img src="/logo.jpg" alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 font-medium text-lg">
          {menus}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <p className="font-medium">{user?.displayName}</p>

        {user && (
          <img
            className="h-12 w-12 rounded-full"
            src={user?.photoURL}
            alt="user image"
          />
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-3 rounded-lg font-semibold hover:opacity-80"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="bg-green-500 text-white py-2 px-3 rounded-lg font-semibold hover:opacity-80"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
