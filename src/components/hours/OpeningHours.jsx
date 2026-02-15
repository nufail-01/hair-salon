import React from "react";

const OpeningHours = () => {
  return (
    <section
      className="bg-[#e8e1d9] text-[#111]
                 px-6 py-16 sm:px-12 sm:py-20 md:px-[100px] md:py-[120px]
                 flex flex-col md:flex-row
                 justify-center items-center
                 gap-10 md:gap-0"
    >
      {/* Left Side */}
      <div
        className="flex flex-col items-center text-center
                   w-full md:w-[400px]"
      >
        <small
          className="font-[Montserrat] text-[16px] sm:text-[20px]
                     font-semibold tracking-[3px]"
        >
          WELCOME
        </small>

        <h3
          className="text-[36px] sm:text-[44px] md:text-[60px]
                     my-5 font-semibold leading-tight
                     w-full md:w-[500px] font-[cormorant]"
        >
          Opening Hours
        </h3>

        <button
          className="px-[40px] py-[15px] bg-[#111] text-white border-none text-[16px]
                     tracking-[2px] cursor-pointer font-[Montserrat]
                     text-sm hover:bg-[#333] transition-colors duration-200"
        >
          BOOK NOW
        </button>
      </div>

      {/* Divider */}
      <div
        className="hidden md:block
                   w-[2px] h-[200px] bg-[#111] mx-[60px]"
      />

      {/* Mobile Divider */}
      <div className="block md:hidden w-[80px] h-[2px] bg-[#111]" />

      {/* Right Side */}
      <div
        className="font-[Montserrat] text-[15px] sm:text-[12px] md:text-[16px]
                   font-semibold leading-[3] tracking-[3px]
                   text-center md:text-left"
      >
        <div>MONDAY TO FRIDAY / 08:00 - 20:00</div>
        <div>SATURDAY / 10:00 - 18:00</div>
        <div>SUNDAY / 10:00 - 18:00</div>
      </div>
    </section>
  );
};

export default OpeningHours;
