import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { ThemeContext } from "../context/theme-provider";

export default function Layout({ children, pageTitle }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="max-w-5xl min-h-screen m-auto">
      <title>Articles | {pageTitle} </title>
      <header
        aria-label="Site Header"
        className={theme.theme === "light" ? "bg-gray-50" : "bg-black"}
      >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li
                  className={
                    theme.theme === "light"
                      ? "border-r-2 border-black pr-2 font-semibold text-lg"
                      : "text-white border-r-2 border-white pr-2 font-semibold text-lg"
                  }
                >
                  Articles
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/search"
                  >
                    Search
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              {theme.theme === "light" ? (
                <RiMoonFill
                  className="hover:cursor-pointer"
                  onClick={() => theme.setTheme("dark")}
                />
              ) : (
                <RiSunFill
                  className="hover:cursor-pointer text-white"
                  onClick={() => theme.setTheme("light")}
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer
        aria-label="Site Footer"
        className={
          theme.theme === "light" ? "bg-gray-50 bottom-0" : "bg-dark bottom-0"
        }
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
