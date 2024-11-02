import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:w-11/12 md:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>

            <NavLink to="/listed-books">Listed Books</NavLink>

            <NavLink to="/dashboard">Pages to Read</NavLink>
          </div>
        </div>
        <a className="font-bold text-xl md:text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-8">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/listed-books">Listed Books</NavLink>

          <NavLink to="/dashboard">Pages to Read</NavLink>
        </div>
      </div>
      <div className="navbar-end gap-2 md:gap-5">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
