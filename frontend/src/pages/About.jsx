import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Hey, I’m Chris </h1>

        <p className="text-lg text-gray-300 text-center">
          Accountant and Dev by day. Automator by passion. Thai-boxer by necessity.
        </p>

        <p className="text-md text-gray-400">
          I’m a software developer and automation enthusiast with a background in finance. 
          I’ve built full-stack apps using Flask, PostgreSQL, and React — and I’ve also built robots that save thousands of hours/year at Drexel using UiPath. 
          If I’m not coding, I’m probably throwing kicks, or building dashboards.
        </p>

        <p className="text-md text-gray-400">
          My approach: automate the boring stuff, make it look good, and never stop improving.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🧰 Tech Stack</h2>
          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Tailwind</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Flask</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">PostgreSQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">UiPath</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Docker</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Git/GitHub</span>
          </div>
        </div>

        <p className="text-center text-gray-500 italic pt-4">
          Scroll on, or shoot me a message if you want to talk tech or Muay Thai.
        </p>
      </div>
    </div>
  );
}
