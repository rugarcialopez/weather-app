import React from "react";
import classNames from "classnames";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = React.memo(() => {
  const {isSidebarOpen, toggleSidebarMenu } = useSidebarContext();
  return (
    <>
      {/* Sidebar backdrop */}
      <div
        className={classNames(
          "fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden",
          "backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)",
          {
            'hidden': !isSidebarOpen,
          },
        )}
      />
      {/* Sidebar */}
      <aside
        x-transition:enter="transition transform duration-300"
        x-transition:enter-start="-translate-x-full opacity-30  ease-in"
        x-transition:enter-end="translate-x-0 opacity-100 ease-out"
        x-transition:leave="transition transform duration-300"
        x-transition:leave-start="translate-x-0 opacity-100 ease-out"
        x-transition:leave-end="-translate-x-full opacity-0 ease-in"
        className={classNames(
          "fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none",
          {
            '-translate-x-full lg:translate-x-0 lg:w-20': !isSidebarOpen,
          },
        )}
      >
        {/* sidebar header */}
        <div
          className={classNames(
            "flex items-center justify-between flex-shrink-0 p-2",
            {
              'lg:justify-center': !isSidebarOpen,
            },
          )}
          >
          <span
            className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            K<span
            className={classNames({
              'lg:hidden': !isSidebarOpen,
            })}>-WD</span>
          </span>
          <button
            onClick={toggleSidebarMenu}
            className="p-2 rounded-md lg:hidden">
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Sidebar links */}
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 overflow-hidden">
            <li>
              <a
                href="#"
                className={classNames(
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100",
                  {
                    'justify-center': !isSidebarOpen
                  },
                )}
              >
                <span>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>

                <span
                  className={classNames(
                    {
                      'lg:hidden': !isSidebarOpen
                    },
                  )}
                  >Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
});

export default Sidebar;
