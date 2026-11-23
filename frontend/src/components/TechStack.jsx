import React from "react";
import skills from "../data/skills";

export default function TechStack() {
  return (
    <div className="space-y-5">
      {skills.map((group) => (
        <div key={group.label}>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{group.label}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-300">
            {group.items.map((item) => (
              <span key={item} className="bg-gray-800 px-3 py-1 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
