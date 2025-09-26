"use client";
import React from 'react';

const DesktopTitleBar = () => {
  return (
    <div className="h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-4 select-none drag-region">
      {/* Left side - App name */}
      <div className="flex items-center gap-2 text-sm text-zinc-300">
        <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-xs font-bold text-white">L</span>
        </div>
        <span className="font-medium">LocalGenie</span>
      </div>

      {/* Center - Optional menu items */}
      <div className="flex items-center gap-4 text-xs text-zinc-400">
        <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
          File
        </button>
        <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
          Edit
        </button>
        <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
          View
        </button>
        <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
          Help
        </button>
      </div>

      {/* Right side - Window controls */}
      <div className="flex items-center">
        <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M0 5h10" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <rect width="8" height="8" x="1" y="1" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:bg-red-600 text-zinc-400 hover:text-white transition-colors">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DesktopTitleBar;