import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-slate-200 text-gray-100">
      <div className="flex items-center">
        <img
          style={{ width: "90px" }}
          className="pb-3"
          src="/images/logoimg.png"
          alt=""
        />
      </div>
      <div className="md:flex md:items-center text-black">
        <div className="flex flex-col md:flex-row md:items-center md:ml-4">
          <NavLink
            to="/about"
            activeClassName="text-gray-300"
            className="block text-md px-2 py-1 md:mx-2 hover:text-gray-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/faqs"
            activeClassName="text-gray-300"
            className="block text-md px-2 py-1 md:mx-2 hover:text-gray-300"
          >
            FAQs
          </NavLink>
          <NavLink
            to="/contactus"
            activeClassName="text-gray-300"
            className="block text-md px-2 py-1 md:mx-2 hover:text-gray-300"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
