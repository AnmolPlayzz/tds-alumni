import React from "react";
import { FloatingDockDemo } from "./FloatingDock";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="mb-4 md:mb-0 w-full md:w-2/5">
          <div className="flex items-center space-x-2">
            <Link to='/'>
              <img
                src="https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739019866/logo_zlscnv.jpg"
                alt="Logo"
                className="w-12 h-12"
              />
            </Link>
            <div>
              <Link to='/'><h2 className="text-lg font-semibold">TDS NSUT</h2></Link>
              <p className="text-gray-300">We Teach, Code And Compete</p>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            &copy; TDS NSUT {year} | All rights reserved.
          </p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="mb-4 md:mb-0 w-full md:w-1/5">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-gray-400 hover:text-white">
                Our Events
              </Link>
            </li>
            <li>
              {/* <Link to="/community" className="text-gray-400 hover:text-white">
                Community
              </Link> */}
            </li>
            <li>
              <Link to="/alumni" className="text-gray-400 hover:text-white">
                Alumni
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-gray-400 hover:text-white">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Floating Dock with Social Links */}
        <div className="mb-4 md:mb-0 w-full md:w-2/5">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            Stay connected with us on social media.
          </p>
          <FloatingDockDemo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

