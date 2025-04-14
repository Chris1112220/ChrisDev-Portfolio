import React from "react";

const ProjectCard = ({ title, description, tech_stack, repo_url, live_url }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-sm text-gray-600 mb-4">
        <strong>Stack:</strong> {tech_stack}
      </div>
      <div className="flex space-x-4">
        {repo_url && (
          <a
            href={repo_url}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {live_url && (
          <a
            href={live_url}
            className="text-green-500 hover:underline"
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
