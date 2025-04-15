import React from "react";

const ProjectCard = ({ title, description, tech_stack, repo_url, live_url }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-md mx-auto text-white">
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-sm text-gray-400 mb-4">
        <strong>Stack:</strong> {tech_stack}
      </div>
      <div className="flex space-x-4">
        {repo_url && (
          <a
            href={repo_url}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {live_url && (
          <a
            href={live_url}
            className="text-teal-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
