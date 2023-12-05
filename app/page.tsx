import Image from "next/image";
import NavBar from "../components/navbar";
import Head from "next/head";
import "./globals.css";
import Welcome from "../components/welcome";
import AboutMe from "../components/aboutme";
import Carousel from "../components/carousel";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-theme-background">
        <NavBar />
        <Welcome />
        <AboutMe />
        <Carousel />
      </main>
    </>
  );
}
