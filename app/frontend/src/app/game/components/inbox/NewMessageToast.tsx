import React, { useState, useEffect } from 'react';
import { Mail, ShieldAlert, MessageSquare, X } from 'lucide-react';
import { InboxItem } from './inboxStorage';

export default function NewMessageToast() {
  const [activeToast, setActiveToast] = useState<InboxItem | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleNewMessage = (event: any) => {
      const message = event.detail;
      setActiveToast(message);
      setIsExiting(false);
      
      // Auto dismiss after 5 seconds
      const timer = setTimeout(() => {
        handleDismiss();
      }, 5000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener('new_inbox_message', handleNewMessage);
    return () => window.removeEventListener('new_inbox_message', handleNewMessage);
  }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveToast(null);
      setIsExiting(false);
    }, 500); // Wait for exit animation
  };

  if (!activeToast) return null;

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(120%); opacity: 0; }
        }
        .animate-toast-in {
          animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-toast-out {
          animation: slideOutRight 0.5s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
      `}</style>
      
      <div className={`fixed top-24 right-8 z-[200] max-w-sm w-full ${isExiting ? 'animate-toast-out' : 'animate-toast-in'}`}>
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] flex gap-4 items-start relative overflow-hidden group">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          
          {/* Icon */}
          <div className={`p-3 rounded-xl shrink-0 ${activeToast.priority === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-400'}`}>
            {activeToast.priority === 'high' ? <ShieldAlert className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none">{activeToast.source}</span>
              <span className="text-[10px] font-bold text-zinc-600 uppercase leading-none italic">• Baru</span>
            </div>
            <h4 className="text-sm font-black text-white tracking-tight leading-tight line-clamp-2">
              {activeToast.subject}
            </h4>
            <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-widest">Klik "Inbox" untuk detail</p>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={handleDismiss}
            className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-700 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
