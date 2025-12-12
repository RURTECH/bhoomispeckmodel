import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VoiceInterface } from './components/VoiceInterface';
import { ImpactCharts } from './components/ImpactCharts';
import { AgentCard } from './components/AgentCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
              BHOOMI
              <span className="block text-[#e94560] text-2xl md:text-4xl mt-3 font-light">AI for ALL.</span>
            </h1>
            <p className="max-w-3xl text-lg text-gray-300 mb-10 leading-relaxed">
              India's biggest AI ecosystem. Designed to eradicate poverty and achieve 100% literacy. 
              We leverage <strong>Agent 0</strong>, <strong>Agent 1</strong>, and <strong>Agent 6</strong> to empower every citizen, 
              regardless of literacy or language, driving the nation's growth by 50%.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('assistant')}
                className="px-8 py-4 bg-[#e94560] text-white font-bold rounded-full shadow-lg hover:bg-[#ff5e78] hover:shadow-[#e94560]/50 transition-all transform hover:-translate-y-1 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                Try Voice Agents
              </button>
              <button 
                 onClick={() => setActiveTab('ecosystem')}
                 className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
              >
                Explore Ecosystem
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl border-t border-white/5 pt-10">
               <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                 <div className="text-4xl font-bold text-[#e94560]">0.1%</div>
                 <div className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Poverty Goal</div>
               </div>
               <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                 <div className="text-4xl font-bold text-blue-400">100%</div>
                 <div className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Education</div>
               </div>
               <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                 <div className="text-4xl font-bold text-green-400">+50%</div>
                 <div className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Growth Rate</div>
               </div>
               <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                 <div className="text-4xl font-bold text-yellow-400">ALL</div>
                 <div className="text-sm text-gray-400 mt-1 uppercase tracking-wide">People</div>
               </div>
            </div>
          </div>
        );
      
      case 'ecosystem':
        return (
          <div className="py-10 px-4 max-w-7xl mx-auto animate-fade-in">
             <div className="mb-12 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">The Agent Ecosystem</h2>
               <p className="text-gray-400 max-w-2xl mx-auto">
                 Specialized AI agents working together to handle Input, Logic, and Output, creating a seamless experience for the illiterate user.
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AgentCard 
                  number="00" 
                  name="Agent 0" 
                  role="The Ears (Voice-to-Text)" 
                  description="Activates via Wake Command. Converts spoken dialects into structured data. Removes the need for typing."
                  colorClass="bg-blue-500"
                />
                <AgentCard 
                  number="01" 
                  name="Agent 1" 
                  role="The Voice (Text-to-Voice)" 
                  description="Converts complex AI responses into simple, spoken local dialects. Ensures information is heard, not just read."
                  colorClass="bg-green-500"
                />
                <AgentCard 
                  number="06" 
                  name="Agent 6" 
                  role="Literacy Trainer" 
                  description="Gradually teaches basic reading and writing skills during interactions. Empowers users to become independent over time."
                  colorClass="bg-[#e94560]"
                />
                <AgentCard 
                  number="02" 
                  name="Forecasting" 
                  role="Yield Optimizer" 
                  description="Predicts weather and crop yields to maximize agricultural income for farmers."
                  colorClass="bg-yellow-500"
                />
                 <AgentCard 
                  number="03" 
                  name="Compounder" 
                  role="Health Assistant" 
                  description="Provides primary care advice and hygiene information where doctors are scarce."
                  colorClass="bg-teal-500"
                />
                 <AgentCard 
                  number="04" 
                  name="Sahayak" 
                  role="Govt. Schemes" 
                  description="Connects users to relevant government subsidies and rights instantly."
                  colorClass="bg-purple-500"
                />
             </div>
          </div>
        );

      case 'assistant':
        return (
          <div className="py-8 px-4 animate-fade-in">
             <div className="text-center mb-6">
               <h2 className="text-2xl font-bold text-white">Live Demo</h2>
               <p className="text-sm text-gray-400">
                 Tap the mic. Try asking: <span className="text-[#e94560] italic">"Teach me how to read"</span> or <span className="text-[#e94560] italic">"What is the poverty goal?"</span>
               </p>
             </div>
             <VoiceInterface />
          </div>
        );

      case 'impact':
        return (
          <div className="py-10 px-4 max-w-7xl mx-auto animate-fade-in">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">Projected Economic Impact</h2>
               <p className="text-gray-400 max-w-2xl mx-auto">
                 By bringing AI to the bottom of the pyramid, we forecast a massive reduction in poverty and a surge in national growth.
               </p>
             </div>
            <ImpactCharts />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white selection:bg-[#e94560] selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-12">
        <p>&copy; 2025 BHOOMI AI. Powered by Google Gemini.</p>
        <p className="mt-2 opacity-50">Empowering India's Rural Future</p>
      </footer>
    </div>
  );
};

export default App;