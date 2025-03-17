"use client";

import { useState, useEffect, useRef } from "react";

import FillLine from "@/components/fill-line";
import ProjectTabs from "@/components/project-tabs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [isOnHeader, setIsOnHeader] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnHeader(entry.isIntersecting);
      }, { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    }
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity motion-safe:scroll-smooth">

      <header ref={headerRef} className="
        min-h-screen w-full grid grid-cols-3 grid-rows-5
        p-4 gap-4 sm:p-8 sm:gap-8"
      >
        <div className="
          @container snap-none
          flex items-end p-8 rounded-xl bg-foreground
          row-span-3 col-span-3 md:row-span-4"
        >
          <h1 className="
            font-display text-background
            text-3xl @sm:text-6xl @md:text-8xl"
          >Lucas McClean</h1>
        </div>
        <nav className={
          `@container ${isOnHeader ? "row-span-1 col-span-3 md:col-span-2" : "fixed top-4 right-4 sm:right-8"}`
        }>
          <ul className={
            `h-full flex items-center font-display group
              ${isOnHeader ?
              "justify-evenly text-xl @sm:text-2xl @md:text-3xl @lg:text-4xl" :
              "justify-end gap-2 text-lg sm:gap-4 sm:text-2xl"}`
          }>
            <li><a href="#about" className="hover:opacity-100 group-hover:opacity-75 transition-opacity duration-200">
              About
            </a></li>
            <li className="text-accent" aria-hidden="true">|</li>
            <li><a href="#experience" className="hover:opacity-100 group-hover:opacity-75 transition-opacity duration-200">
              Experience
            </a></li>
            <li className="text-accent" aria-hidden="true">|</li>
            <li><a href="#contact" className="hover:opacity-100 group-hover:opacity-75 transition-opacity duration-200">
              Contact
            </a></li>
          </ul>
        </nav>
        <div className="
          @container
          h-full flex items-center justify-center
          row-span-1 col-span-3 md:col-span-1
          border-2 border-solid border-accent rounded-xl"
        >
          <h2 className="
            text-xl @sm:text-2xl
            text-center text-balance font-display"
          >
            Solving problems with code.
          </h2>
        </div>
      </header>

      <main>

        <section id="about" className="min-h-screen m-4 sm:m-8 p-4 sm:p-8 flex items-center justify-center snap-center">
          <div className="w-[75ch] text-lg">
            <h2 className="mb-2 flex items-center gap-2 font-display text-xl font-bold uppercase">
              <FillLine className="w-1/16 bg-accent h-[2px]" />
              About
              <FillLine className="w-1/8 bg-accent h-[2px]" />
            </h2>
            <p className="mb-2">
              I’m a software engineer driven by the why&mdash;why languages work the way they do, why
              certain patterns emerge, and why some designs stand the test of time.
            </p>
            <p>
              The ability to implement just about anything you can dream up is what sets software
              apart from the other engineering disciplines. That’s why I love it.
            </p>
          </div>
        </section>

        <section id="experience" className="min-h-screen m-4 sm:m-8 p-4 sm:p-8 flex items-center justify-center snap-center">
          <div className="h-[60svh] w-[75ch] text-lg flex flex-col">
            <h2 className="mb-2 flex items-center gap-2 font-display text-xl font-bold uppercase">
              <FillLine className="w-3/32 bg-accent h-[2px]" />
              Experience
              <FillLine className="w-3/32 bg-accent h-[2px]" />
            </h2>
            <ProjectTabs />
            <Link
              href="https://github.com/lucasmcclean" target="_blank"
              className="flex items-center gap-2 p-4 opacity-80"
            ><FaGithub size={32} className="inline" />See more of my work on GitHub</Link>
          </div>
        </section>

        <section id="contact" className="min-h-screen m-4 sm:m-8 p-4 sm:p-8 flex items-center justify-center snap-center">
          <div className="w-[75ch] text-lg">
            <h2 className="mb-2 flex items-center gap-2 font-display text-xl font-bold uppercase">
              <FillLine className="w-1/8 bg-accent h-[2px]" />
              Contact
              <FillLine className="w-1/16 bg-accent h-[2px]" />
            </h2>
            <div className="flex items-center">
              <p className="max-w-[50ch]">
                I'd love for you to reach out about any collaborations or opportunities or to talk
                about anything tech!
              </p>
              <div>
                <Link href="https://linkedin.com/in/lucasmcclean" target="_blank"><FaLinkedin size={64} /></Link>
                <Link href="mailto:lucasmcclean.com"><MdEmail size={64} /></Link>
              </div>
            </div>
          </div>
        </section>

      </main >

      <footer className="min-h-[30svh] m-4 sm:m-8 p-4 sm:p-8 flex flex-col gap-8">
        <p>&copy; Lucas McClean {new Date().getFullYear()}</p>
        <ul className="flex gap-4">
          <li><Link href="https://linkedin.com/in/lucasmcclean" target="_blank"><FaLinkedin size={64} /></Link></li>
          <li><Link href="mailto:lucasmcclean.com"><MdEmail size={64} /></Link></li>
          <li><Link href="https://github.com/lucasmcclean" target="_blank"><FaGithub size={64} /></Link></li>
        </ul>
      </footer>

    </div >
  );
}
