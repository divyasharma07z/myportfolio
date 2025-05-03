import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Me", link: "#home" },
    { name: " Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ];

  return (
    <div className="w-full fixed top-2 left-0 z-[9999] flex justify-center">
      <nav className="w-[95%] md:w-[90%] lg:w-[98%] bg-transparent shadow-lg lg:px-8 lg:py-3 
        backdrop-blur-lg backdrop-saturate-150 rounded-lg border border-white/20">
        
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
          
         {/* Logo */}
<a href="#home" className="mr-4 cursor-pointer py-1.5 text-xl font-semibold flex items-center h-[20px]">
  <img 
    src="D1.png" 
    alt="logo" 
    className="h-[85px]  w-auto scale-100" 
  />
</a>


          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
              {links.map((item, index) => (
                <li key={index} className="flex items-center p-1 text-lg gap-x-2">
                  <a href={item.link} className="relative text-lg w-fit block transition-all duration-300 text-white hover:text-[#85e7ff] 
                    after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#85e7ff] 
                    after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg 
            text-center align-middle text-xs font-medium uppercase text-inherit transition-all 
            hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none 
            disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full mt-2 w-full rounded-lg shadow-lg p-4 bg-black/90 border border-white/20 lg:hidden">
              <ul className="flex flex-col gap-4 text-gray-300">
                {links.map((item, index) => (
                  <li key={index} className="text-lg hover:text-[#85e7ff]">
                    <a href={item.link} onClick={() => setIsOpen(false)}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
