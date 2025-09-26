"use client";
import { useEffect, useState } from "react";
import React from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 overflow-hidden relative flex flex-col">
      {/* Simple Desktop Title Bar */}
      <div className="h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-4 select-none">
        <div className="flex items-center gap-2 text-sm text-zinc-300">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-white">L</span>
          </div>
          <span className="font-medium">LocalGenie</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
            File
          </button>
          <button className="hover:text-zinc-200 transition-colors px-2 py-1 rounded hover:bg-zinc-800">
            Help
          </button>
        </div>
        <div className="flex items-center">
          <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors">
            −
          </button>
          <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors">
            □
          </button>
          <button className="w-6 h-6 flex items-center justify-center hover:bg-red-600 text-zinc-400 hover:text-white transition-colors">
            ×
          </button>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-4">
        <div className="w-full max-w-4xl">
          {/* Welcome Header */}
          <div
            className={`h-min w-full flex flex-col text-center mx-auto transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* App Logo/Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-2xl font-bold text-white">LG</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-400 via-zinc-100 to-white inline-block text-transparent bg-clip-text drop-shadow-lg mb-3">
              Welcome to LocalGenie
            </h1>
            <p className="text-lg font-light text-zinc-400 mb-2">
              Your offline AI assistant for documents, images, and audio
            </p>
            <p className="text-sm text-zinc-500 mb-8">
              🔒 Completely private • 🚀 Lightning fast • 🌐 Works offline
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-zinc-400 mb-4 text-center">Quick Actions</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { title: "Analyze Document", icon: "📄", gradient: "from-blue-500 to-cyan-500" },
                { title: "Process Images", icon: "🖼️", gradient: "from-purple-500 to-pink-500" },
                { title: "Transcribe Audio", icon: "🎵", gradient: "from-green-500 to-emerald-500" },
                { title: "Knowledge Search", icon: "🔍", gradient: "from-orange-500 to-red-500" }
              ].map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputPrompt(`Help me ${action.title.toLowerCase()}`)}
                  className="group relative p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-200 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
                  <div className="relative">
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <h4 className="text-sm font-medium text-white mb-1">{action.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Input Box */}
          <div className="py-4 px-6 w-full mx-auto max-w-4xl">
            <div className="relative w-full min-h-[10rem] rounded-xl overflow-hidden shadow-2xl shadow-black/20">
              <div className="flex flex-col relative h-full w-full min-h-[10rem] p-5 bg-zinc-800/80 backdrop-blur rounded-xl border border-zinc-600 hover:border-zinc-500 focus-within:border-cyan-500 transition-all duration-200">
                <textarea
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder="Ask me anything about your documents, images, or audio files..."
                  className="flex-1 w-full pt-2 text-[16px] outline-none resize-none bg-transparent placeholder-zinc-500 text-zinc-200"
                  rows={3}
                />
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white text-sm transition-all duration-200 border border-zinc-600 hover:border-zinc-500">
                      📎 Attach Files
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm transition-all duration-200">
                      ⭐ Enhance
                    </button>
                  </div>
                  
                  <button
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Send →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="w-full max-w-3xl mx-auto mt-5">
            <div className="grid grid-cols-3 gap-2">
              {["Summarize my research papers", "Analyze financial documents", "Extract text from images"].map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-400 text-sm hover:bg-zinc-700 hover:text-white transition-all duration-200 shadow overflow-hidden text-ellipsis whitespace-nowrap"
                  onClick={() => setInputPrompt(prompt)}
                  title={prompt}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-8 bg-zinc-900 border-t border-zinc-700 flex items-center justify-between px-4 text-xs text-zinc-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Offline Mode Active
          </span>
          <span>Ready to assist</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LocalGenie v1.0.0</span>
        </div>
      </div>
    </div>
  );
}; 

export default React.memo(Home);
