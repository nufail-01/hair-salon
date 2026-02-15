import React from "react";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative min-h-[500px] bg-[#0a0a0a] overflow-hidden
             flex items-center px-6 py-16 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Watermark letter */}
      <span
        className="absolute top-3/4 left-1/2
             -translate-x-1/2 -translate-y-1/2
           
             text-[300px] sm:text-[240px] md:text-[300px] lg:text-[420px]
             font-['Olivia'] 
             text-white/[0.07]
             select-none pointer-events-none
             leading-none"
      >
        P
      </span>

      {/* Inner layout */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto
               flex flex-col items-center text-center
               sm:flex-row sm:items-center sm:text-left
               gap-10 md:gap-16 lg:gap-24"
      >
        {/* Left — Heading */}
        <h2
          className="text-white text-4xl sm:text-6xl lg:text-7xl 
             font-normal leading-tight shrink-0 font-['Cormorant']"
        >
          <span className="mr-3 sm:mr-0">Pricing</span>
          <br className="hidden sm:block" />
          <span>List</span>
        </h2>

        {/* Right — Service rows */}
        <div className="w-full sm:flex-1 flex flex-col">
          {/* Row 1 */}
          <div className="flex items-center gap-3 py-4">
            <span className="text-white text-[0.85rem] sm:text-sm md:text-base font-bold tracking-[0.18em] uppercase font-[Montserrat]">
              HAIR CUT WITH BLOW DRY
            </span>
            <span className="flex-1 border-b border-white/25" />
            <span className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider font-[Montserrat]">
              $35
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-3 py-4">
            <span className="text-white text-[0.85rem] sm:text-sm md:text-base font-bold tracking-[0.18em] uppercase font-[Montserrat]">
              BLOW DRY & CURLS
            </span>
            <span className="flex-1 border-b border-white/25" />
            <span className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider font-[Montserrat]">
              $25
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-3 py-4">
            <span className="text-white text-[0.85rem] sm:text-sm md:text-base font-bold tracking-[0.18em] uppercase font-[Montserrat]">
              COLOR & HIGHLIGHTS
            </span>
            <span className="flex-1 border-b border-white/25" />
            <span className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider font-[Montserrat]">
              $100
            </span>
          </div>

          {/* Row 4 */}
          <div className="flex items-center gap-3 py-4">
            <span className="text-white text-[0.85rem] sm:text-sm md:text-base font-bold tracking-[0.18em] uppercase font-[Montserrat]">
              SHAMPOO & SET
            </span>
            <span className="flex-1 border-b border-white/25" />
            <span className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider font-[Montserrat]">
              $45
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
