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
        "absolute left-6 bottom-6 flex items-center h-12",
        isOpen && "pr-4",
        className)
      }
    >
      <button
        className="justify-self-center w-12 text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        &#9776;
      </button>

      <ul
        className="flex items-center gap-x-4 text-xl origin-left"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      >
        <li className={clsx(
          "opacity-0 transition-[transform, opacity] ease-in duration-(--trans-m)",
          isOpen && "opacity-100 translate-x-3 ease-out"
        )}
        >
          <a href="#">About</a>
        </li>
        <li className={clsx(
          "opacity-0 transition-[transform, opacity] ease-in duration-(--trans-m)",
          isOpen && "opacity-100 translate-x-3 ease-out"
        )}
        >
          <a href="#">Projects</a>
        </li>
        <li
          className={clsx(
            "opacity-0 transition-[transform, opacity] ease-in duration-(--trans-m)",
            isOpen && "opacity-100 translate-x-3 ease-out"
          )}
        >
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav >
  )
}
