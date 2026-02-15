import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 py-16 sm:px-12 md:px-16 lg:px-20">
      {/* Top — 3 columns */}
      <div className="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16 mb-16">
        {/* Column 1 — Logo + Address + Socials */}
        <div className="flex flex-col gap-6 md:w-1/3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white text-[20px] tracking-[3px] font-[Montserrat]">
            <span className="border border-white px-[10px] py-[5px] text-[14px] font-semibold">
              THE
            </span>
            PERFECT CUT
          </div>

          {/* Address */}
          <p className="text-[#aaa] text-[16px] font-[Montserrat] leading-[1.8]">
            B 35, Some street adderess, New york
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full   flex items-center justify-center bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-black stroke-[1.5]"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="black" stroke="none" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-black"
              >
                <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H8.08V12h2.29V9.8c0-2.26 1.35-3.51 3.42-3.51.99 0 2.02.18 2.02.18v2.22h-1.14c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.88h-2.12v6.99A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="#"
              aria-label="Pinterest"
              className="w-9 h-9 rounded-full   flex items-center justify-center bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 "
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.563 0-2.387-1.715-4.057-4.163-4.057-2.837 0-4.5 2.128-4.5 4.328 0 .857.33 1.775.741 2.277a.3.3 0 01.069.286c-.076.312-.244.995-.277 1.134-.044.181-.146.219-.337.132-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Opening Hours */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <h4 className="text-white text-[12px] font-bold tracking-[4px] font-[Montserrat]">
            OPENING HOURS
          </h4>
          <p className="text-[#ccc] text-[16px] font-[Montserrat] leading-[1.6] font-semibold">
            Working days / 08:00 - 20:00
          </p>
          <p className="text-[#ccc] text-[16px] font-[Montserrat] leading-[1.6] font-semibold">
            Saturday / 08:00 - 20:00
          </p>
          <p className="text-[#ccc] text-[16px] font-[Montserrat] leading-[1.6] font-semibold">
            Sunday / CLOSED
          </p>
        </div>

        {/* Column 3 — Newsletter */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <p
            className="text-white text-[20px] sm:text-[18px] font-['Montserrat']
                        font-light leading-[1.5]"
          >
            Stay informed about our monthly promotions, products & more
          </p>

          {/* Email input */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold tracking-[2px] text-white font-[Montserrat] font-semibold">
              EMAIL
            </label>
            <input
              type="email"
              className="bg-transparent border-b-2 border-white/60 outline-none
                         py-2 text-white text-[14px] font-[Montserrat]
                         focus:border-white transition-colors duration-200"
            />
          </div>

          {/* Send button */}
          <button
            className="self-start px-[40px] py-[14px]
                       bg-white text-[#111]
                       text-[16px] font-bold tracking-[3px] font-[Montserrat]
                       hover:bg-[#ddd] transition-colors duration-200 cursor-pointer"
          >
            SEND
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="  pt-6 text-center">
        <p className="text-[#666] text-[14px] tracking-[3px] font-[Montserrat]">
          ©DESIGNED BY NUFAIL SHAIKH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
