import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide text-white">ChrisDev</h1>
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-400">Projects</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </nav>

      <main className="flex-grow p-8 bg-gray-900 text-white">
        <Outlet />
      </main>

      <footer className="text-center text-sm py-4 text-gray-500 border-t border-gray-700">
        © 2025 ChrisDev Portfolio
      </footer>
    </div>
  );
}
