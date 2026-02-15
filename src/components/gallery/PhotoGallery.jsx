import React from "react";

const PhotoGallery = () => {
  const images = {
    img1: "./src/assets/images/c1.jpg",
    img2: "./src/assets/images/c2.jpg",
    img3: "./src/assets/images/c3.jpg",
    img4: "./src/assets/images/c4.jpg",
  };

  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-[60px] lg:py-[70px]">

      {/* ── Mobile (< sm): single column stack ── */}
      <div className="flex flex-col gap-[18px] sm:hidden">
        <div
          className="w-full aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img1}')` }}
        />
        <div
          className="w-full aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img2}')` }}
        />
        <div
          className="w-full aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img3}')` }}
        />

        {/* Follow Us card */}
        <div className="relative w-full aspect-[4/3] bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           text-[160px] font-['Olivia'] text-white/[0.07]
                           select-none pointer-events-none leading-none">
            P
          </span>
          <h2 className="relative z-10 text-white font-['Cormorant_Garamond'] font-light text-[28px] tracking-wide mb-5">
            Follow Us
          </h2>
          <a href="#" aria-label="Instagram"
            className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className="w-5 h-5 fill-none stroke-black stroke-[1.5]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="black" stroke="none" />
            </svg>
          </a>
        </div>

        <div
          className="w-full aspect-[4/3] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img4}')` }}
        />
      </div>

      {/* ── Tablet (sm → lg): 2-column grid ── */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-[18px]">
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img1}')` }} />
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img2}')` }} />
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img3}')` }} />

        {/* Follow Us card */}
        <div className="relative aspect-[4/5] bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           text-[180px] font-['Olivia'] text-white/[0.07]
                           select-none pointer-events-none leading-none">
            P
          </span>
          <h2 className="relative z-10 text-white font-['Cormorant_Garamond'] font-light text-[30px] tracking-wide mb-5">
            Follow Us
          </h2>
          <a href="#" aria-label="Instagram"
            className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className="w-5 h-5 fill-none stroke-black stroke-[1.5]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="black" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Wide photo spans full width */}
        <div className="col-span-2 aspect-[16/7] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img4}')` }} />
      </div>

      {/* ── Desktop (lg+): 3-column grid matching screenshot ── */}
      <div className="hidden lg:grid grid-cols-3 gap-[18px]">

        {/* Row 1 — three equal portrait images */}
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img1}')` }} />
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img2}')` }} />
        <div className="aspect-[4/5] bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img3}')` }} />

        {/* Row 2 — Follow Us card */}
        <div className="relative bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden aspect-[4/4]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           text-[200px] font-['Olivia'] text-white/[0.07]
                           select-none pointer-events-none leading-none">
            P
          </span>
          <h2 className="relative z-10 text-white font-['Cormorant_Garamond'] font-light text-[34px] tracking-wide mb-6">
            Follow Us
          </h2>
          <a href="#" aria-label="Instagram"
            className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className="w-5 h-5 fill-none stroke-black stroke-[1.5]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="black" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Row 2 — Wide photo spans 2 columns */}
        <div className="col-span-2 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.img4}')` }} />
      </div>

    </section>
  );
};

export default PhotoGallery;