import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Menu,X} from 'lucide-react';
import ScrollProgress from "../ui/scroll-progress"
import HyperText from '../ui/hyper-text';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ['Home', 'About','Events', 'Alumni', 'Resources'];

  return (
    <div className="sticky top-0 bg-black z-50 flex justify-between items-center p-5">
      <div>
        <Link to="/">
          <img src="https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739019866/logo_zlscnv.jpg" alt="TDS Logo" className="h-12 w-12" />
        </Link>
        </div>
         {/* Menu bar bar for mobile */}
        <div className="lg:hidden">
          <label onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <Menu className='text-blue-500' size={24} />
            </div>
          </label>
        </div>
        {/* navbar links for large screen */}
        <div className="hidden lg:flex justify-end items-center gap-8 font-semibold text-lg text-blue-500">
          {links.map((link, index) => (
            <Link key={index} to={link.toLocaleLowerCase() === "events" ? "/events/upcoming" : `/${link.toLocaleLowerCase()}`} className="hover:underline">
              <HyperText animateOnHover={false} className={'text-lg'}>{link}</HyperText>
            </Link>
          ))}
        </div>
        {/* menu bar links for mobile screen */}
      <div className={`fixed top-0 left-0 w-full h-screen text-lg text-blue-500 bg-black space-y-5 flex flex-col items-center justify-center transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 lg:hidden`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-2xl text-blue-500"><X size={24}/></button>
        {links.map((link, index) => (
          <Link key={index} to={link.toLocaleLowerCase() === "events" ? "/events/upcoming" : `/${link.toLocaleLowerCase()}`}>
            <h1 onClick={() => setIsMenuOpen(false)} className={'text-lg text-blue-500'}>{link}</h1>
          </Link>
        ))}
      </div>
      <ScrollProgress className="top-[88px]" />
    </div>
  );
};

export default Navbar;