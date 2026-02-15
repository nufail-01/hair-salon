import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side */}
        <div
          className="relative bg-[#080D10]
                     px-6 py-16 sm:px-12 sm:py-20 md:px-[86px] md:py-[120px]
                     flex flex-col justify-center
                     w-full md:w-1/2 lg:w-[60.6%]
                     overflow-hidden"
        >
          {/* Decorative giant "p" */}
          <span
            className="absolute left-0 top-20
             text-[300px] sm:text-[500px] md:text-[700px]
             leading-none select-none pointer-events-none
             text-[#C19A5D0F] opacity-80
             font-['Olivia'] uppercase"
          >
            p
          </span>

          {/* Label */}
          <small
            className="text-[#C19A5D] tracking-[3px] text-[16px] sm:text-[20px]
                       font-semibold mb-[10px] font-[Montserrat] block"
          >
            ABOUT
          </small>

          {/* Heading */}
          <h2
            className="font-['Cormorant'] text-[36px] sm:text-[44px] lg:text-[54px]
                       my-[30px] font-bold text-white leading-tight"
          >
            We tell amazing stories with hair
          </h2>

          {/* Body */}
          <p
            className="text-[#c1c1c1] max-w-[750px] leading-[36px] mb-[50px]
                       font-[Montserrat] text-[16px] sm:text-[18px] lg:text-[20px]
                       font-medium"
          >
            You dream about sleek, healthy looking hair that looks picture
            perfect, ready to rock on any occasion? We will make your dreams
            come true.
          </p>

          {/* Button */}
          <button
            className="self-start px-[35px] py-[15px] text-[16px] 
                       border border-white bg-transparent text-white
                       tracking-[2px] cursor-pointer font-[Montserrat]
                       text-sm hover:bg-white hover:text-black
                       transition-colors duration-200"
          >
            VIEW MORE
          </button>
        </div>

        {/* Right Side — image */}
        <div
          className="w-full md:flex-1 h-[50vh] md:h-auto"
          style={{
            backgroundImage: "url('./src/assets/images/about.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
