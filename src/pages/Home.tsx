import clsx from "clsx";
import { useEffect, useState } from "react";

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

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)

    return () => clearInterval(interval);
  })

  return (
    <>
      <header
        className="fixed w-full grid grid-cols-2 px-8 py-4 text-lg font-mono bg-gradient-to-b from-bg from-70% to-transparent"
      >
        <h1 className="place-self-start text-2xl font-extrabold">Lucas McClean</h1>
        <p className="place-self-end">Software Engineer</p>
      </header>
      <nav className="px-8">
        <ul className="fixed top-1/2 -translateY-1/2">
          <li className={clsx(currentSection === "about" && "text-lg font-extrabold")}><a href="#about">About</a></li>
          <li className={clsx(currentSection === "work" && "text-lg font-extrabold")}><a href="#work">Work</a></li>
          <li className={clsx(currentSection === "contact" && "text-lg font-extrabold")}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section id="about" className="h-screen flex flex-col justify-center items-center snap-center snap-always">
          <p className="max-w-2xl">
            I’m a software engineer driven by the why&mdash;why languages work the way they do, why
            certain patterns emerge, and why some designs stand the test of time.
            <br /><br />
            The ability to implement just about anything you can dream up is what sets software
            apart from the other engineering disciplines. That’s why I love it.
          </p>
        </section>
        <section id="work" className="h-screen flex flex-col justify-center items-center snap-center snap-always">
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
        <section id="contact" className="h-screen flex flex-col justify-center items-center snap-center snap-always">
          <p>Let's get in touch.</p>
        </section>
      </main>
      <footer
        className="fixed bottom-0 w-full grid grid-cols-2 px-8 py-4 text-lg font-mono bg-gradient-to-t from-bg from-70% to-transparent"
      >
        <p className="place-self-start">&copy; Lucas McClean 2025</p>
        <p className="place-self-end text-2xl font-extrabold">{currentTime.toLocaleString()}</p>
      </footer>
    </>
  )
}
