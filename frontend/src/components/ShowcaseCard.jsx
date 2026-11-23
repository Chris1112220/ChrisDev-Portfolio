import React from "react";

export default function ShowcaseCard({ title, context, bullets = [], buildNote, stack = [], repo, live }) {
  return (
    <article className="flex flex-col h-full bg-gray-800/60 border border-gray-700/60 rounded-xl p-6">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{context}</p>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      <ul className="space-y-2 text-gray-300 leading-relaxed mb-4">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span aria-hidden="true">-</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {buildNote && (
        <p className="text-gray-400 leading-relaxed mb-4">{buildNote}</p>
      )}

      <ul className="flex flex-wrap gap-2 mb-5">
        {stack.map((tool) => (
          <li key={tool} className="text-xs bg-gray-900 text-gray-300 px-2.5 py-1 rounded-full">
            {tool}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-lg"
          >
            Live demo
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg"
          >
            View code
          </a>
        )}
        {!live && (
          <p className="self-center text-sm text-gray-500">No public live demo yet.</p>
        )}
      </div>
    </article>
  );
}
