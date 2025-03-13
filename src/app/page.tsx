"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isOnHeader, setIsOnHeader] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnHeader(entry.isIntersecting);
      }, { threshold: 0.001 }
    );
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    }
  }, []);

  return (
    <main>
      <header ref={headerRef} className="
        w-screen h-svh p-8 flex flex-col gap-8
        md:grid md:grid-cols-3 md:grid-rows-5"
      >
        <div className="
          flex items-end p-8 bg-foreground rounded-xl
          h-3/8 md:row-span-4 md:col-span-3 md:h-full"
        >
          <h1 className="
            text-3xl sm:text-6xl md:text-8xl
            font-display text-background"
          >Lucas McClean</h1>
        </div>
        <div className="
          h-1/8 md:h-full
          col-span-1 flex items-center justify-center border-2 border-solid border-foreground rounded-xl"
        >
          <h2 className="
            text-xl md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl
            font-display"
          >Solving problems with code.</h2>
        </div>
        <nav className={
          `${isOnHeader ? "col-span-2" : "fixed top-4 right-8"}`
        }>
          <ul className={
            `h-full flex items-center font-display
              ${isOnHeader ? "justify-evenly text-4xl" : "justify-end gap-8 text-2xl"}`
          }>
            <li><a href="#about">About</a></li>
            <li aria-hidden="true">|</li>
            <li><a href="#experience">Experience</a></li>
            <li aria-hidden="true">|</li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="m-8 p-8 flex justify-evenly border rounded-xl">
        <h2 className="font-display text-4xl">Who is this guy?</h2>
        <Image
          src="/portrait.jpg"
          width={1066} height={1600}
          alt=""
          className="h-full max-w-1/4 object-cover"
        />
      </section>
    </main >
  );
}
