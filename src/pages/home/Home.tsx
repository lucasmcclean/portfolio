import { useEffect, useState } from "react";
import clsx from "clsx";

import ThemeToggle from "../../components/ThemeToggle";
import HomeNav from "./HomeNav";
import HomeDivider from "./HomeDivider";

import "./Home.css";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      }, { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [offset, setOffset] = useState(0);

  // Offset used for parallax
  useEffect(() => {
    const main = document.querySelector("main");
    if (main === null) return;

    const handleScroll = () => setOffset(main.scrollTop);

    main.addEventListener("scroll", handleScroll);

    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ThemeToggle />
      <HomeNav currentSection={currentSection} />
      <header className="fixed w-full grid grid-cols-2 px-8 py-4 text-lg font-mono">
        <h1 className="place-self-start text-2xl font-extrabold">Lucas McClean</h1>
        <p className="place-self-end">Software Engineer</p>
      </header>
      <main
        className="h-screen not-motion-reduce:scroll-smooth transition-colors duration-(--trans-m)"
      >
        <section
          id="about"
          className="h-screen flex justify-center items-center gap-16 bg-acc dark:bg-bg"
        >
          <p className="max-w-xl">
            I’m a software engineer driven by the why&mdash;why languages work the way they do, why
            certain patterns emerge, and why some designs stand the test of time.
            <br /><br />
            The ability to implement just about anything you can dream up is what sets software
            apart from the other engineering disciplines. That’s why I love it.
          </p>
          <img
            className="max-h-[50svh] rounded-lg"
            style={{
              transform: `translateY(${offset * 0.1}px)`,
              aspectRatio: '3024 / 4032',
            }}
            src="/tree.jpeg"
          />
        </section>
        <HomeDivider className="bg-acc fill-sec dark:bg-bg dark:fill-bg" />
        <section
          id="work"
          className="h-screen flex flex-col justify-center items-center bg-sec dark:bg-bg"
        >
          <div>
            <h3>URL Shortener</h3>
          </div>
          <div>
            <h3>Portfolio</h3>
          </div>
          <div>
            <h3>To-Do CLI</h3>
          </div>
          <div>
            <h3>Doomsday Catastrophe</h3>
          </div>
        </section>
        <HomeDivider className="rotate-y-180 bg-sec fill-prim dark:opacity-0" />
        <section
          id="contact"
          className="h-screen flex flex-col justify-center items-center bg-prim dark:bg-bg"
        >
          <p>Let's get in touch.</p>
        </section>
      </main>
      <footer
        className={clsx("fixed bottom-0 opacity-0",
          "px-8 py-4",
          "text-sm font-mono transition-opacity duration-(--trans-m)",
          currentSection === "contact" && "opacity-100")}
      >
        <p className="place-self-start">&copy; Lucas McClean 2025</p>
      </footer>
    </>
  )
}
