import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
          <Link to="/" className="text-xl font-bold tracking-wide">
            Chris Roberts
          </Link>
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  isActive ? "text-teal-400" : "text-gray-300 hover:text-white"
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow px-4 sm:px-8 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Chris Roberts ·{" "}
        <a href="https://github.com/Chris1112220" target="_blank" rel="noreferrer" className="hover:text-gray-300">
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/christopher-roberts-philadelphia/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
