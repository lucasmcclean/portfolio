import React, { useState } from "react";

interface CardFlipThroughProps {
  children: Readonly<React.ReactNode>;
}

export default function CardFlipThrough({ children }: CardFlipThroughProps) {
  const childArr = React.Children.toArray(children);
  const [activeChild, setActiveChild] = useState(0);

  const incrementActiveChild = (amt: number): void => {
    if (activeChild + amt < 0) setActiveChild(0);
    else if (activeChild + amt >= childArr.length) setActiveChild(childArr.length - 1);
    else setActiveChild(activeChild + amt);
  }

  return (
    <section className="flex">
      <button
        onClick={() => incrementActiveChild(-1)}
        className="grow min-w-8 bg-foreground opacity-5 hover:opacity-10"
      >
        &larr;
      </button>
      <div>
        {childArr[activeChild]}
      </div>
      <button
        onClick={() => incrementActiveChild(1)}
        className="grow min-w-8 bg-foreground opacity-5 hover:opacity-10"
      >
        &rarr;
      </button>
    </section>
  )
}
