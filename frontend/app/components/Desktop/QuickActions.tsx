"use client";
import React from 'react';

interface QuickActionsProps {
  setInputPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const QuickActions = ({ setInputPrompt }: QuickActionsProps) => {
  const quickActions = [
    {
      title: "Analyze Document",
      description: "Upload and analyze PDF/DOCX files",
      icon: "📄",
      prompt: "Analyze the document I'm about to upload and provide a comprehensive summary.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Process Images", 
      description: "Extract text and analyze images",
      icon: "🖼️",
      prompt: "Analyze the images I'm uploading and describe what you see in detail.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Transcribe Audio",
      description: "Convert audio to text",
      icon: "🎵",
      prompt: "Transcribe the audio file I'm uploading and provide a summary of the content.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Knowledge Search",
      description: "Search through your files",
      icon: "🔍",
      prompt: "Search through my uploaded files and help me find information about ",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-zinc-400 mb-4 text-center">Quick Actions</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => setInputPrompt(action.prompt)}
            className="group relative p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-200 hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
            <div className="relative">
              <div className="text-2xl mb-2">{action.icon}</div>
              <h4 className="text-sm font-medium text-white mb-1">{action.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;