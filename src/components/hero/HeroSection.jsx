import React, { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative w-full h-screen">
      {/* Navbar */}
      <header
        className="absolute top-[30px] left-[25px] right-[25px] sm:left-[50px] sm:right-[50px]
                   flex justify-between items-center z-20 font-[Montserrat]"
      >
        {/* Logo */}
        <div className="text-[18px] tracking-[3px] text-white flex items-center">
          <span className="border border-white px-[10px] py-[6px] mr-[8px] text-[18px]">
            THE
          </span>
          PERFECT CUT
        </div>

        {/* Nav Links — hidden on mobile */}
        <nav className="hidden sm:flex">
          <a
            href="#about"
            className="ml-[30px] no-underline text-white text-[16px] tracking-[2px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#pricing"
            className="ml-[30px] no-underline text-white text-[16px] tracking-[2px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="ml-[30px] no-underline text-white text-[16px] tracking-[2px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger — visible on mobile */}
        <button
          className="sm:hidden text-white flex flex-col gap-[5px] z-30"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {/* Animates into an X when open */}
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-screen z-10 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out font-[Montserrat]
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          backdropFilter: "blur(16px) brightness(0.6)",
          WebkitBackdropFilter: "blur(16px) brightness(0.6)",
          backgroundColor: "#0B1518CC",
        }}
      >
        <nav className="flex flex-col items-center gap-[40px]">
          <a
            href="#about"
            onClick={closeMenu}
            className="no-underline text-white text-[22px] tracking-[4px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={closeMenu}
            className="no-underline text-white text-[22px] tracking-[4px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="no-underline text-white text-[22px] tracking-[4px]
                       uppercase hover:text-[#8a715c] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Hero */}
      <div
        className="flex h-screen"
        style={{
          backgroundImage: "url('./src/assets/images/hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left — image shows through */}
        <div className="hidden md:flex flex-1" />

        {/* Right Content Panel — frosted glass blur */}
        <div
          className="w-full md:w-[520px] lg:w-[600px]
                     px-6 py-24 sm:px-12 sm:py-[120px] md:px-[70px]
                     flex flex-col justify-center"
          style={{
            backdropFilter: "blur(14px) brightness(0.75)",
            WebkitBackdropFilter: "blur(18px) brightness(0.75)",
            backgroundColor: "#0B1518A6",
          }}
        >
          {/* Heading */}
          <h1
            className="text-[42px] sm:text-[56px] lg:text-[64px]
                       leading-[1.2] tracking-[3px] mb-5
                       text-white font-bold font-['Cormorant']"
          >
            THE <br />
            PERFECT CUT
          </h1>

          {/* Subtext */}
          <p
            className="text-[15px] sm:text-[18px] text-[#e0e0e0]
                       mb-[30px] leading-[36px] font-normal font-[Montserrat]"
          >
            We see "YOU" and we create the look that matches best your
            personality
          </p>

          {/* Divider */}
          <div className="w-[120px] h-[2px] bg-white mb-[30px] font-semibold" />

          {/* Tagline */}
          <h4
            className="tracking-[8px] text-[16px] sm:text-[14px] mb-[35px]
                       font-bold text-[#e9e9e9] font-[Montserrat]"
          >
            NEW YORK • SINCE 2000
          </h4>

          {/* Buttons */}
          <div className="flex gap-[15px]">
            {/* Prev */}
            <button
              className="w-[50px] h-[50px] bg-[#8a715c] border-none
                         text-white cursor-pointer flex items-center justify-center
                         hover:bg-[#7a6250] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              className="w-[50px] h-[50px] bg-[#8a715c] border-none
                         text-white cursor-pointer flex items-center justify-center
                         hover:bg-[#7a6250] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
