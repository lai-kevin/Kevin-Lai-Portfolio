"use client";
import Image from "next/image";
const Carousel = () => {
  return (
    <div className="w-screen bg-black py-10 flex flex-col">
      <h2 className="text-xl font-bold pl-6 text-white font-dela-gothic pb-5">
        Projects
      </h2>
      <div className="carousel carousel-center p-6 space-x-5 bg-black ">
        <div className="carousel-item flex flex-col">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
            width={400}
          />
          <h4 className="p-5 text-center">
            STARS: Stony Brook University <br />
            Assembler and Runtime Simulator
          </h4>
        </div>
        <div className="carousel-item flex flex-col">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
            width={400}
          />
          <h4 className="p-5 text-center">Malloc! A C Memory Allocator</h4>
        </div>
        <div className="carousel-item flex flex-col">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
            width={400}
          />
          <h4 className="p-5 text-center">
            Stock Market Dashbaoard <br /> with ChatGPT Widgets
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
