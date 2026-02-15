import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col md:flex-row min-h-screen">
      {/* Left — image with overlay text */}
      <div
        className="relative w-full md:w-1/2 min-h-[400px] md:min-h-screen
             bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./src/assets/images/contact.jpg')" }}
      >
        {/* Dark overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text Box */}
        <div className="relative bg-black/75 px-8 py-6 sm:px-10 sm:py-8 text-center">
          <h1
            className="text-white font-['cormorant']
                 text-[32px] sm:text-[44px] lg:text-[56px]
                 font-light tracking-[6px] leading-[1.3]"
          >
            WE WOULD <br />
            LIKE TO <br />
            HEAR FROM <br />
            YOU
          </h1>
        </div>
      </div>

      {/* Right — form */}
      <div
        className="w-full md:w-1/2 bg-[#f0ebe4]
                   px-6 py-16 sm:px-12 sm:py-16 lg:px-[80px] lg:py-[80px]
                   flex flex-col justify-center"
      >
        {/* Row 1 — First Name + Last Name */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat]">
              FIRST NAME
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-[#111] outline-none
                         py-2 text-[#111] text-[14px] font-[Montserrat]
                         focus:border-[#8a715c] transition-colors duration-200"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat]">
              LAST NAME
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-[#111] outline-none
                         py-2 text-[#111] text-[14px] font-[Montserrat]
                         focus:border-[#8a715c] transition-colors duration-200"
            />
          </div>
        </div>

        {/* Row 2 — Phone + Email */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat]">
              PHONE
            </label>
            <input
              type="tel"
              className="bg-transparent border-b border-[#111] outline-none
                         py-2 text-[#111] text-[14px] font-[Montserrat]
                         focus:border-[#8a715c] transition-colors duration-200"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat]">
              EMAIL
            </label>
            <input
              type="email"
              className="bg-transparent border-b border-[#111] outline-none
                         py-2 text-[#111] text-[14px] font-[Montserrat]
                         focus:border-[#8a715c] transition-colors duration-200"
            />
          </div>
        </div>

        {/* Interested In */}
        <div className="mb-10">
          <label className="block text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat] mb-5">
            INTERESTED IN
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              className="px-5 py-2 border-2 border-[#111] bg-transparent
                         text-[#111] text-[16px] font-[Montserrat] font-semibold
                         hover:bg-[#111] hover:text-white transition-colors duration-200
                         cursor-pointer"
            >
              Hair cut
            </button>
            <button
              className="px-5 py-2 border-2 border-[#111] bg-transparent
                         text-[#111] text-[16px] font-[Montserrat] font-semibold          
                         hover:bg-[#111] hover:text-white transition-colors duration-200
                         cursor-pointer"
            >
              Coloring
            </button>
            <button
              className="px-5 py-2 border-2 border-[#111] bg-transparent
                         text-[#111] text-[16px] font-[Montserrat] font-semibold
                         hover:bg-[#111] hover:text-white transition-colors duration-200
                         cursor-pointer"
            >
              Straightening
            </button>
          </div>
        </div>

        {/* Message */}
        <div className="mb-10 flex flex-col gap-2">
          <label className="text-[14px] font-bold tracking-[2px] text-[#111] font-[Montserrat]">
            MESSAGE
          </label>
          <input
            type="text"
            className="bg-transparent border-b border-[#111] outline-none
                       py-2 text-[#111] text-[14px] font-[Montserrat]
                       focus:border-[#8a715c] transition-colors duration-200"
          />
        </div>

        {/* Submit */}
        <button
          className="self-start px-[50px] py-[16px]
                     bg-[#111] text-white
                     text-[12px] font-bold tracking-[3px] font-[Montserrat]
                     hover:bg-[#333] transition-colors duration-200 cursor-pointer"
        >
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
