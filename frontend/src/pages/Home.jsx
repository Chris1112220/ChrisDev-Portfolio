import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const services = [
  {
    title: "Finance automation",
    text: "Unattended bots that take over journal entries, bank postings, document uploads and month-end reporting.",
  },
  {
    title: "AI document workflows",
    text: "Invoices and statements read by AI, then checked by accountant-grade rules before anything hits the books.",
  },
  {
    title: "Dashboards & reporting",
    text: "Clear BI dashboards so owners and managers see their numbers without building spreadsheets by hand.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-6xl mx-auto space-y-20">
      {/* Hero */}
      <section className="pt-6 sm:pt-12">
        <p className="text-teal-400 font-medium mb-4">Automation Developer</p>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl">
          I'm Chris. I automate the manual work in accounting.
        </h1>
        <p className="text-lg text-gray-300 mt-6 max-w-2xl leading-relaxed">
          I'm an accountant who builds the tools. I've put <span className="text-white font-semibold">10+ production UiPath bots</span> into
          service, running unattended so a whole finance department can use them, and the biggest one alone saves
          about 1,800 hours a year. Now I help small businesses that are drowning in data entry get that time back.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            to="/projects"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-lg"
          >
            See my work
          </Link>
          <Link
            to="/contact"
            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* What I do */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What I do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="bg-gray-800/40 border border-gray-700/60 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured work</h2>
          <Link to="/projects" className="text-teal-400 hover:underline text-sm">
            All projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Two audiences */}
      <section className="bg-gray-800/40 border border-gray-700/60 rounded-xl p-8 sm:p-10 text-center">
        <h3 className="text-2xl font-semibold mb-3">Running a small business?</h3>
        <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
          If your team spends hours keying invoices or reconciling by hand, let's talk about taking that off their plate.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-lg"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
