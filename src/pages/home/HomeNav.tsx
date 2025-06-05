import clsx from "clsx";

interface HomeNavProps {
  currentSection: string;
}

export default function HomeNav({ currentSection }: HomeNavProps) {
  return (
    <nav className="fixed top-1/2 -translate-y-1/2 px-8">
      <ul className="h-32 w-20 grid grid-rows-3 place-items-center">
        <li
          className={clsx(
            "transition-[font-size,font-weight] duration-(--trans-s) hover:text-lg",
            currentSection === "about" && "text-lg font-extrabold"
          )}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={clsx(
            "transition-[font-size,font-weight] duration-(--trans-s) hover:text-lg",
            currentSection === "work" && "text-lg font-extrabold"
          )}
        >
          <a href="#work">Work</a>
        </li>
        <li
          className={clsx(
            "transition-[font-size,font-weight] duration-(--trans-s) hover:text-lg",
            currentSection === "contact" && "text-lg font-extrabold"
          )}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

  )
}
