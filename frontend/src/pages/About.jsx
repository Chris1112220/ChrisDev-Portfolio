import React from "react";
import TechStack from "../components/TechStack";

export default function About() {
  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center space-y-3">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Hey I'm Chris</h1>
          <p className="text-3xl sm:text-5xl font-bold text-teal-400 leading-tight">Automation Accountant</p>
          <p className="text-lg sm:text-xl text-gray-400">Automator by Passion</p>
        </header>

        <div className="space-y-4 text-md text-gray-400">
          <p>
            I'm an accountant who builds the tools. These days I split my time about 50/50 between accounting and automation at a large university.
          </p>
          <p>
            I've built 10+ UiPath bots that save 5,000+ hours (~$200K) a year. The biggest is an ACH document-intake bot that saves 4,300+ hours (~$156K) a year across 20 staff accountants. I also helped the team close year-end while we were down one person.
          </p>
          <p>
            I came up through accounting. I earned a BBA in Finance from Temple University (2007 to 2012), then a graduate certificate in Computer Science (Foundations) from 2023 to January 2024. I started building bots on top of a full accounting workload, and now that's half the job.
          </p>
          <p>
            On my own time I build AI and web projects. Email Triage is a LangGraph and Gemini agent that reads Gmail, classifies mail, and drafts a reply when one is needed. It never sends email. Chok Dee Muay Thai is a Next.js app that builds a timed watch session from a shared YouTube pool. I'm also building Little Limits, an iPhone app that tracks baby product usage limits and flags recalls. That one is still a work in progress.
          </p>
          <p>
            I direct AI agents and review their output. AI agents wrote much of the code on those projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <TechStack />
        </div>

        <p className="text-center text-gray-500 italic pt-4">
          If you want to talk automation, or Muay Thai, send me a message.
        </p>
      </div>
    </div>
  );
}
