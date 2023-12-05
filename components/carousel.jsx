"use client";
import Image from "next/image";
import stars_img from "../images/stars.jpg";
import malloc_img from "../images/malloc.png";
import chatgpt_img from "../images/gpt.jpg";
import portolio_img from "../images/portfolio.png";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [stars_img, malloc_img, chatgpt_img, portolio_img];
const cards = [
  {
    image: stars_img,
    title: "STARS: Stony Brook University Assembler and Runtime Simulator",
    description:
      "STARS is a simulator for the STARS assembly language. It is capable of assembling and running STARS assembly code. It is written in C++ and uses the Qt framework for the GUI.",
  },
  {
    image: malloc_img,
    title: "Malloc! A C Memory Allocator",
    description:
      "Malloc is a memory allocator written in C. It is capable of allocating and freeing memory. It is written in C and uses the C standard library.",
  },
  {
    image: chatgpt_img,
    title: "Stock Market Dashbaoard with ChatGPT Widgets",
    description:
      "This is a stock market dashboard that uses the Yahoo Finance API to fetch stock data. It is written in Python and uses the Streamlit framework for the UI.",
  },
  {
    image: portolio_img,
    title: "My Personal Website with Next.js and TailwindCSS",
    description:
      "This is my personal website. It is written in Next.js and uses TailwindCSS for styling.",
  },
];
const cardByIndex = (index) => cards[index % cards.length];

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="w-screen bg-black py-10 flex flex-col">
      <h2 className="text-xl font-bold pl-6 text-white font-dela-gothic pb-5">
        Projects
      </h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <div
                  className="carousel-item flex flex-col items-center"
                >
                  <div style={{ position: "relative"}}>
                    <Image
                      src={cardByIndex(index).image}
                      className="rounded-box"
                      alt="Stars"
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="p-5 text-center text-sm">
                    {cardByIndex(index).title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div className="w-screen bg-black py-10 flex flex-col">
      <h2 className="text-xl font-bold pl-6 text-white font-dela-gothic pb-5">
        Projects
      </h2>
      <div className="carousel carousel-center p-6 space-x-5 bg-black ">
        <div id="project1" className="carousel-item flex flex-col">
          <div style={{ position: "relative" }}>
            <Image
              src={stars_img}
              className="rounded-box"
              alt="Stars"
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h4 className="p-5 text-center text-sm">
            STARS: Stony Brook University <br />
            Assembler and Runtime Simulator
          </h4>
        </div>
        <div id="project2" className="carousel-item flex flex-col">
          <Image
            src={portolio_img}
            className="rounded-box"
            alt="Stock Dashboard"
            height={300}
            style={{ objectFit: "cover" }}
          />
          <h4 className="p-5 text-center text-sm">
            My Personal Website <br /> with Next.js and TailwindCSS
          </h4>
        </div>
        <div id="project3" className="carousel-item flex flex-col">
          <Image
            src={malloc_img}
            className="rounded-box"
            alt="Malloc!"
            height={300}
            style={{ objectFit: "cover" }}
          />
          <h4 className="p-5 text-center text-sm">Malloc! A C Memory Allocator</h4>
        </div>
        <div id="project4" className="carousel-item flex flex-col">
          <Image
            src={chatgpt_img}
            className="rounded-box"
            alt="Stock Dashboard"
            height={300}
            style={{ objectFit: "cover" }}
          />
          <h4 className="p-5 text-center text-sm">
            Stock Market Dashbaoard <br /> with ChatGPT Widgets
          </h4>
        </div>
      </div>
    </div> */
}
