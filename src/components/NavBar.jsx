import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          BhanuKiran Reddy
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 sm:mt-0">
  <a
    href="/BhanuKiran Reddy_Resume.pdf"
    download
    className="text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full bg-[#78a083] text-black font-medium border border-[#78a083] hover:bg-[#202020] hover:text-white transition-all duration-300 whitespace-nowrap"
  >
    Resume
  </a>

  <a
    href="#contact"
    className="text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full bg-[#202020] text-white border border-[#78a083] font-medium hover:bg-[#78a083] hover:text-black transition-all duration-300 whitespace-nowrap"
  >
    Contact Me
  </a>
</div>

      </div>
    </header>
  );
};

export default NavBar;
