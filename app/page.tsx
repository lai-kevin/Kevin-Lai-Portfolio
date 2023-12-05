import Image from "next/image";
import NavBar from "../components/navbar";
import Head from "next/head";
import "./globals.css";
import '../css/embla.css'
import Welcome from "../components/welcome";
import AboutMe from "../components/aboutme";
import Carousel from "../components/carousel";

const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-theme-background">
        <NavBar />
        <Welcome />
        <AboutMe />
        <Carousel slides={SLIDES} options={OPTIONS} />
      </main>
    </>
  );
}
