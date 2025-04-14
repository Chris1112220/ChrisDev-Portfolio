import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-black shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">ChrisDev</h1>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-400">Projects</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </nav>

      <main className="flex-grow p-8">
        {children}
      </main>

      <footer className="text-center text-sm py-4 text-gray-500 border-t border-gray-700">
        © 2025 ChrisDev Portfolio
      </footer>
    </div>
  );
}