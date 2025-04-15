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
  {
    title: "Drexel University - UiPath - Journal Entry Community Bot",
    description: "Extension of the Journal Entry Bot, automating journal creation for multiple users. (Time Saved: 50 users, 6 mins each, 30 journals/month = 1,800 hours/year)",
    tech_stack: "UiPath, RPA",
    repo_url: "",
    live_url: "",
  },
  {
    title: "Drexel University - UiPath - Journal Entry Bot",
    description: "Original bot for automating Drexel's journal entry process via Banner and OnBase. (Time Saved: 1 user, 5 mins each, 30 journals/month = 30 hours/year)",
    tech_stack: "UiPath, RPA",
    repo_url: "",
    live_url: "",
  },
  {
    title: "Drexel University - UiPath - OnBase Automation",
    description: "Automates OnBase upload processes to streamline document management for finance operations.",
    tech_stack: "UiPath, RPA",
    repo_url: "",
    live_url: "",
  },
  {
    title: "Drexel University - UiPath - WF Posting Entry Bot",
    description: "Extracts bank statement data with OCR, prepares journal entries, and runs them via automation. (Time Saved: 72 hours/year)",
    tech_stack: "UiPath, RPA",
    repo_url: "",
    live_url: "",
  },
  {
    title: "Drexel University - UiPath - ACH Download Bot",
    description: "Downloads ACH files from bank and stores them in a shared drive. (Time Saved: 18 hours/year)",
    tech_stack: "UiPath, RPA",
    repo_url: "",
    live_url: "",
  },
  {
    title: "Drexel University - UiPath - VPN Login Bot",
    description: "Hybrid bot that automates Drexel VPN login process. (Time Saved: 130 hours/year across 50 users)",
    tech_stack: "UiPath, RPA, os",
    repo_url: "",
    live_url: "",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}