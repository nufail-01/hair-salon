import React from "react";

const TeamSection = () => {
  return (
    <div>
      <div>
        {/* ── Card 1 — Image Left ── */}
        <div className="flex flex-col md:flex-row w-full bg-[#f5f0ea] min-h-screen">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
            <img
              src="./src/assets/images/manager.jpg"
              alt="Oliiae Vandervort"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center items-center
                 px-6 sm:px-8 md:px-12 py-10 md:py-0
                 relative overflow-hidden"
          >
            {/* Watermark */}
            <span
              className="absolute font-light select-none pointer-events-none
                   text-[150px] sm:text-[220px] md:text-[300px]
                   text-[rgba(160,148,130,0.13)]
                   font-['Olivia']"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              P
            </span>

            {/* Text */}
            <div className="relative z-10 text-center max-w-md sm:max-w-lg">
              {/* Heading */}
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#111]
                     text-[26px] sm:text-[36px] md:text-[46px] lg:text-[60px]
                     leading-tight mb-4"
              >
                Oliiae Vandervort
              </h2>

              {/* Role */}
              <p
                className="uppercase tracking-[3px] font-[Montserrat] font-bold text-[#111]
                     text-[13px] sm:text-[14px] md:text-[16px]
                     mb-4"
              >
                MANAGER
              </p>

              {/* Description */}
              <p
                className="font-[Montserrat] text-[#4D4D4D]
                     text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px]
                     leading-relaxed mb-6 md:mb-8"
              >
                We are well equipped with years of hair know-how, and ready to
                create your best look with natural products. Hair is our
                passion, and our passion shows on every client that walks out of
                our doors full of confidence.
              </p>

              {/* Button */}
              <button
                className="bg-[#111] text-white uppercase
                     font-[Montserrat] font-bold tracking-[3px]
                     text-[13px] sm:text-[14px] md:text-[16px]
                     px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4
                     hover:bg-[#333] transition-colors duration-200
                     cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card 2 — Image Right ── */}
      <div className="flex flex-col md:flex-row-reverse w-full bg-[#f5f0ea] min-h-screen">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
          <img
            src="./src/assets/images/hairstylist.jpg"
            alt="Morris Homenick"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center
               px-6 sm:px-8 md:px-12 py-10 md:py-0
               relative overflow-hidden"
        >
          {/* Watermark */}
          <span
            className="absolute font-light select-none pointer-events-none
                 text-[150px] sm:text-[220px] md:text-[300px]
                 text-[rgba(160,148,130,0.13)]
                 font-['Olivia']"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            P
          </span>

          {/* Text */}
          <div className="relative z-10 text-center max-w-md sm:max-w-lg">
            {/* Heading */}
            <h2
              className="font-['Cormorant_Garamond'] font-light text-[#111]
                   text-[26px] sm:text-[36px] md:text-[46px] lg:text-[60px]
                   leading-tight mb-4"
            >
              Morris Homenick
            </h2>

            {/* Role */}
            <p
              className="uppercase tracking-[3px] font-[Montserrat] font-bold text-[#111]
                   text-[13px] sm:text-[14px] md:text-[16px]
                   mb-4"
            >
              HAIR STYLIST / COLORIST
            </p>

            {/* Description */}
            <p
              className="font-[Montserrat] text-[#4D4D4D]
                   text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px]
                   leading-relaxed mb-6 md:mb-8"
            >
              Designed to maintain your current colour, blend out a growing root
              or balance your blonde while providing full and demi-permanent
              coverage. Our custom kit can disguise grey-white hair.
            </p>

            {/* Button */}
            <button
              className="bg-[#111] text-white uppercase
                   font-[Montserrat] font-bold tracking-[3px]
                   text-[13px] sm:text-[14px] md:text-[16px]
                   px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4
                   hover:bg-[#333] transition-colors duration-200
                   cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* ── Card 3 — Image Left ── */}
      <div className="flex flex-col md:flex-row w-full bg-[#f5f0ea] max-h-screen">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
          <img
            src="./src/assets/images/colorist.jpg"
            alt="Nancy Gibson"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center
               px-6 sm:px-8 md:px-12 py-10 md:py-0
               relative overflow-hidden"
        >
          {/* Watermark */}
          <span
            className="absolute font-light select-none pointer-events-none
                 text-[150px] sm:text-[220px] md:text-[300px]
                 text-[rgba(160,148,130,0.13)]
                 font-['Olivia']"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            P
          </span>

          {/* Text */}
          <div className="relative z-10 text-center max-w-md sm:max-w-lg">
            <h2
              className="font-['Cormorant_Garamond'] font-light text-[#111]
                   text-[26px] sm:text-[36px] md:text-[46px] lg:text-[60px]
                   leading-tight mb-4"
            >
              Nancy Gibson
            </h2>

            <p
              className="uppercase tracking-[3px] font-[Montserrat] font-bold text-[#111]
                   text-[13px] sm:text-[14px] md:text-[16px]
                   mb-4"
            >
              HAIR STYLIST / COLORIST
            </p>

            <p
              className="font-[Montserrat] text-[#4D4D4D]
                   text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px]
                   leading-relaxed mb-6 md:mb-8"
            >
              Designed to maintain your current colour, blend out a growing root
              or balance your blonde while providing full and demi-permanent
              coverage. Our custom kit can disguise grey-white hair.
            </p>

            <button
              className="bg-[#111] text-white uppercase
                   font-[Montserrat] font-bold tracking-[3px]
                   text-[13px] sm:text-[14px] md:text-[16px]
                   px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4
                   hover:bg-[#333] transition-colors duration-200
                   cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
