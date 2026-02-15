import React from "react";

const StylingShowcase = () => {
  return (
    <section className="w-full">
      {/* Hero 2 */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[550px] flex">
        {/* Left Image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('./src/assets/images/m1.jpg')" }}
        />

        {/* Right Image */}
        <div
          className="flex-1 bg-cover bg-left"
          style={{ backgroundImage: "url('./src/assets/images/m2.jpg')" }}
        />

        {/* Center Content Box — frosted glass blur */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     z-10
                     w-[80vw] sm:w-[460px] md:w-[700px]
                     px-4 py-5 sm:px-12 sm:py-7 md:px-[60px] md:py-[50px] font-[cormorant]"
          style={{
            backdropFilter: "blur(14px) brightness(0.65)",
            WebkitBackdropFilter: "blur(18px) brightness(0.65)",
            backgroundColor: "#070F12B2",
          }}
        >
          <h1
            className="text-[30px] sm:text-[36px] md:text-[60px]
                       text-white mb-5 md:mb-[30px]
                       font-medium text-left leading-tight"
          >
            Natural styling and cuts
          </h1>

          <p
            className="text-left text-[#d6d6d6]
                       text-[14px] sm:text-[16px] md:text-[20px]
                       leading-[1.8] font-[Montserrat]"
          >
            You dream about sleek, healthy looking hair that looks picture
            perfect, ready to rock on any occasion? We will make your dreams
            come true.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StylingShowcase;
