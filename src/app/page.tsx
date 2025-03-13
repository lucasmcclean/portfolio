"use client";

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
      <header ref={headerRef} className=" w-screen h-svh p-8 grid grid-cols-3 grid-rows-5 gap-8">
        <div className="row-span-4 col-span-3 flex items-end p-8 bg-foreground rounded-xl">
          <h1 className="font-display text-8xl text-background">Lucas McClean</h1>
        </div>
        <div className="col-span-1 flex items-center justify-center border-2 border-solid border-foreground rounded-xl">
          <h2 className="font-display text-3xl">Solving problems with code.</h2>
        </div>
        <nav className={
          `${isOnHeader ? "col-span-2" : "fixed top-4 right-8"}`
        }>
          <ul className={
            `h-full flex items-center text-4xl font-display
              ${isOnHeader ? "justify-evenly" : "justify-end gap-8"}`
          }>
            <li><a href="#about">About</a></li>
            <li aria-hidden="true">|</li>
            <li><a href="#experience">Experience</a></li>
            <li aria-hidden="true">|</li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="min-h-svh">
        <h2 className="text"></h2>
      </section>
    </main >
  );
}
