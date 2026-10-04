import React from "react";

export default function ProjectCard({ title, context, summary, impact, stack = [], repo, live }) {
  const isPrivate = !repo && !live;

  return (
    <article className="flex flex-col h-full bg-gray-800/60 border border-gray-700/60 rounded-xl p-6 hover:border-teal-500/50 transition-colors">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{context}</p>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{summary}</p>

      {impact && (
        <p className="text-teal-300 font-medium mb-4">{impact}</p>
      )}

      <ul className="flex flex-wrap gap-2 mb-5">
        {stack.map((tool) => (
          <li key={tool} className="text-xs bg-gray-900 text-gray-300 px-2.5 py-1 rounded-full">
            {tool}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-5 text-sm">
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
            View code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
            Live demo
          </a>
        )}
        {isPrivate && (
          <span className="text-gray-500">Code is private · built on the job</span>
        )}
      </div>
    </article>
  );
}
