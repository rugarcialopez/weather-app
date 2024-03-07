import React from "react";
import classNames from "classnames";
import { useSidebarContext } from "../context/SidebarContext";

const Navbar = React.memo(() => {
  const {isSidebarOpen, toggleSidebarMenu } = useSidebarContext();
  return (
    <header className="flex-shrink-0 border-b">
      {/* Navbar left */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-3">
          <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
          {/* Toggle sidebar button */}
          <button
            onClick={toggleSidebarMenu}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            <svg
              className={classNames(
                "w-4 h-4 text-gray-600",
                {
                  'transform transition-transform -rotate-180': isSidebarOpen
                },
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
          </div>
      </div>
    </header>
  );
});

export default Navbar
