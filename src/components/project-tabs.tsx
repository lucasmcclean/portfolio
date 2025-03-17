import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  url: string;
  img: string;
  imgH: number;
  imgW: number;
  stack: string[];
}

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const projects: Project[] = [
    {
      title: "URL Shortener",
      url: "/url-shortener",
      img: "/portfolio.png",
      imgH: 1432,
      imgW: 2904,
      stack: ["Go", "PostgreSQL", "React"],
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      img: "/portfolio.png",
      imgH: 1432,
      imgW: 2904,
      stack: ["Next", "React"],
    },
    {
      title: "LSync",
      url: "/lsync",
      img: "/portfolio.png",
      imgH: 1432,
      imgW: 2904,
      stack: ["Rust"],
    },
  ];

  return (
    <div className="grow flex flex-col">
      <div>
        <div role="tablist" aria-label="Project Tabs" className="sm:ml-4 flex gap-x-4 justify-around sm:justify-start">
          {projects.map((project, idx) => (
            <button
              key={idx} id={`tab-${idx}`}
              type="button" role="tab" aria-controls={`tabpanel-${idx}`}
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`
                px-2 py-1 border-t-2 border-l-2 border-r-2 border-b-2 sm:border-b-0
                rounded-b-xl sm:rounded-b-none rounded-t-xl
                bold text-sm sm:text-lg md:text-xl
                mb-1 sm:mb-0
                ${activeTab === idx ?
                  "bg-foreground text-background" :
                  "bg-background text-foreground hover:bg-foreground hover:text-background"}`
              }
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="
        relative grow flex items-end
        border-2 overflow-hidden
        rounded-xl text-xl sm:text-3xl"
      >
        <Image
          alt=""
          src={projects[activeTab].img}
          width={projects[activeTab].imgW}
          height={projects[activeTab].imgH}
          className="absolute w-full h-full top-0 left-0 object-cover z-[-1]"
        />
        <div className="w-full h-1/2 p-4 flex items-end justify-between bg-gradient-to-t from-background via-transparent to-transparent">
          <h3 className="hidden sm:inline">{projects[activeTab].title}</h3>
          <a href={projects[activeTab].url} className="">Learn more &rarr;</a>
        </div>
      </div >
    </div >
  )
}
