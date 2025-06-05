import { useState } from 'react';

import clsx from 'clsx';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "fixed left-6 bottom-6 flex items-center h-12 rounded-2xl",
        isOpen && "pr-4",
        className)
      }
    >
      <button
        className="justify-self-center w-12 h-12 text-3xl cursor-pointer rounded-2xl bg-surf"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        &#9776;
      </button>

      <ul
        className={clsx(
          "flex items-center gap-x-4 w-fit text-xl",
          "opacity-0 transition-[opacity, transform] duration-(--trans-m) ease-out",
          isOpen && "translate-x-4 opacity-100"
        )}
      >
        {isOpen &&
          <>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </>
        }
      </ul>
    </nav >
  )
}
