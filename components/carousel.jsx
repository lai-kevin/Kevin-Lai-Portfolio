"use client";
import Image from "next/image";
import stars_img from "../images/stars.jpg";
import malloc_img from "../images/malloc.png";
import chatgpt_img from "../images/gpt.jpg";
import portolio_img from "../images/portfolio.png";
const Carousel = () => {
  return (
    <div className="w-screen bg-black py-10 flex flex-col">
      <h2 className="text-xl font-bold pl-6 text-white font-dela-gothic pb-5">
        Highlight Projects
      </h2>
      <div className="carousel carousel-center p-6 space-x-5 bg-black ">
        <div className="carousel-item flex flex-col">
          <div style={{ position: "relative" }}>
            <Image
              src={stars_img}
              className="rounded-box"
              alt="Stars"
              height={window.innerWidth < 600 ? 230 : 300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h4 className="p-5 text-center text-sm">
            STARS: Stony Brook University <br />
            Assembler and Runtime Simulator
          </h4>
        </div>
        <div className="carousel-item flex flex-col">
        <div style={{ minWidth: "400px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "gray", borderRadius: 20 }}>
            <Image
                src={portolio_img}
                className="rounded-box"
                alt="My Website"
                height={window.innerWidth < 600 ? 230 : 300}
                style={{ objectFit: "cover" }}
            />
        </div>
          <h4 className="p-5 text-center text-sm">
            My Portfolio Website
            <br /> with Next.js and TailwindCSS
          </h4>
        </div>
        <div className="carousel-item flex flex-col">
          <Image
            src={malloc_img}
            className="rounded-box"
            alt="Malloc!"
            height={window.innerWidth < 600 ? 230 : 300}
            style={{ objectFit: "cover" }}
          />
          <h4 className="p-5 text-center text-sm">
            Malloc! A C Memory Allocator
          </h4>
        </div>
        <div className="carousel-item flex flex-col">
          <Image
            src={chatgpt_img}
            className="rounded-box"
            alt="Stock Dashboard"
            height={window.innerWidth < 600 ? 230 : 300}
            style={{ objectFit: "cover" }}
          />
          <h4 className="p-5 text-center text-sm">
            Stock Market Dashbaoard <br /> with ChatGPT Widgets
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
