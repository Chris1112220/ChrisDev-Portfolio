import React from "react";

export default function Contact() {
  return (
    <div className="py-6">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Let’s Connect 📬</h1>

        <p className="text-lg text-gray-300 text-center">
          Whether you want to work together, talk automation, or just say hi — I’d love to hear from you.
        </p>

        <div className="flex flex-col gap-4 text-center text-lg text-gray-300">
          <div>
            📧 Email:{" "}
            <a
              href="mailto:Christopher.Roberts11220@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Christopher.Roberts11220@gmail.com
            </a>
          </div>

          <div>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/christopher-roberts-philadelphia/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/christopher-roberts-philadelphia
            </a>
          </div>

          <div>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Chris1112220"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Chris1112220
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
