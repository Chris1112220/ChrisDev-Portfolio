import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "CryptoTrack Pro",
    description: "A crypto portfolio tracker with P&L, DCA, and visual dashboards.",
    tech_stack: "Flask, PostgreSQL, Chart.js, Docker",
    repo_url: "https://github.com/Chris1112220/CryptoTrack-Pro",
    live_url: "https://cryptotrack-pro.onrender.com",
  },
  {
    title: "Personal Blog",
    description: "A deployed Flask + PostgreSQL blog with user login and post management.",
    tech_stack: "Flask, PostgreSQL, JWT, Docker",
    repo_url: "https://github.com/Chris1112220/Personal-Blog",
    live_url: "https://personal-blog-h41u.onrender.com",
  },
  {
    title: "Developer Portfolio",
    description: "This very portfolio website, built with React and Tailwind, to showcase my projects and skills.",
    tech_stack: "React, Tailwind CSS, React Router, Vercel",
    repo_url: "https://github.com/Chris1112220/ChrisDev-Portfolio",
    live_url: "https://chrisdev-portfolio.vercel.app", 
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      {projects.map((p, index) => (
        <ProjectCard key={index} {...p} />
      ))}
    </div>
  );
}
