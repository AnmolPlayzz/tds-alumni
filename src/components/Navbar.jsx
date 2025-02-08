import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Menu,X} from 'lucide-react';
import ScrollProgress from "./ui/scroll-progress"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-black z-50 flex justify-between items-center p-5">
      <div>
        <Link to="/">
          <img src="logo.jpeg" alt="TDS Logo" className="h-12 w-12" />
        </Link>
        </div>
        <div className="lg:hidden">
          <label onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <Menu className='text-blue-500' size={24} />
            </div>
          </label>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-8 font-semibold text-lg text-blue-500">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/community">Community</Link> */}
          <Link to="/events">Events</Link>
          {/* <Link to="/blogs">Blogs</Link> */}
          <Link to="/alumni">Alumni</Link>
          <Link to="/resources">Resources</Link>
        </div>
      <div className={`fixed top-0 left-0 w-full h-screen text-lg text-blue-500 bg-black space-y-5 flex flex-col items-center justify-center transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 lg:hidden`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-2xl text-blue-500"><X size={24}/></button>
        <Link to="/" onClick={() => setIsMenuOpen(prev => !prev)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(prev => !prev)}>About</Link>
        {/* <Link to="/community" onClick={() => setIsMenuOpen(prev => !prev)}>Community</Link> */}
        <Link to="/events" onClick={() => setIsMenuOpen(prev => !prev)} className="">Events</Link>
        {/* <Link to="/blogs" onClick={() => setIsMenuOpen(prev => !prev)}>Blogs</Link> */}
        <Link to="/alumni" onClick={() => setIsMenuOpen(prev => !prev)}>Alumni</Link>
        <Link to="/resources" onClick={() => setIsMenuOpen(prev => !prev)}>Resources</Link>
      </div>
      <ScrollProgress className="top-[88px]" />
    </div>
  );
};

export default Navbar;
