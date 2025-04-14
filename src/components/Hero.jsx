import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-center px-6 md:px-32 overflow-hidden font-sans">
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80 blur-[3px] z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-6xl">
        <div className="text-5xl md:text-9xl font-extrabold tracking-tight leading-tight md:leading-[7rem] text-shadow-xl">
          <div className="mb-2">We are</div>

          {/* Logo Animation Block */}
          <div className="flex items-center mb-2">
            <div className="h-16 md:h-28 w-16 md:w-28 rounded-full overflow-hidden shadow-lg border-4 border-white/30 backdrop-blur-sm animate-pulse ring-2 ring-white/40">
              <video
                src="https://cdn.cuberto.com/cb/home/hero/1.mp4"
                loop
                autoPlay
                muted
                className="object-cover h-full w-full"
              ></video>
            </div>
            <span className="ml-4 text-[2.8rem] md:text-[7rem] font-bold text-white">
             into
            </span>
          </div>

          <div className=""> TechFaarm</div>
        </div>

        {/* Subtitle */}
        <div className="mt-6 text-xl md:text-3xl text-gray-800 dark:text-gray-300 font-light max-w-2xl">
          We deal in <span className="font-medium text-blue-600 dark:text-blue-400">innovative IT solutions</span> to transform your digital presence.
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
