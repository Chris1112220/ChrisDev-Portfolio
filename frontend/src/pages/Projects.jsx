import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects, { categories } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h1>
      <p className="text-gray-400 mb-8 max-w-2xl">
        Automation I've built at work, plus my own builds. Work projects run on private systems,
        so they're described here without code.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              active === c.id
                ? "bg-teal-500 text-gray-950 border-teal-500"
                : "border-gray-700 text-gray-300 hover:border-gray-500"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
