import React from 'react';
import { X, Mail, ShieldAlert, MessageSquare } from 'lucide-react';

interface InboxItem {
  id: string;
  source: string;
  subject: string;
  time: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
}

const mockMessages: InboxItem[] = [
  { id: '1', source: 'Badan Pusat Statistik', subject: 'Laporan Pertumbuhan Ekonomi Kuartal I', time: '2 jam yang lalu', read: false, priority: 'medium' },
  { id: '2', source: 'Kementerian Pertahanan', subject: 'Laporan Kesiapan Armada Militer Nasional', time: '5 jam yang lalu', read: true, priority: 'high' },
  { id: '3', source: 'Menteri Luar Negeri', subject: 'Tawaran Perjanjian Perdagangan dari Tiongkok', time: 'Kemarin', read: true, priority: 'medium' },
  { id: '4', source: 'Intelijen Negara', subject: 'Laporan Stabilitas Keamanan Wilayah Perbatasan', time: '2 hari yang lalu', read: true, priority: 'high' }
];

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InboxModal({ isOpen, onClose }: InboxModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[110] flex items-center justify-center backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase italic tracking-widest leading-none">Kotak Masuk</h2>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Sistem Komunikasi Kepresidenan</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {mockMessages.map((msg) => (
            <div 
              key={msg.id}
              className={`group p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                msg.read ? 'bg-zinc-900/20 border-zinc-900' : 'bg-blue-500/5 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]'
              } hover:border-zinc-700`}
            >
              {!msg.read && (
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              )}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${msg.priority === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-zinc-800 text-zinc-500'}`}>
                    {msg.priority === 'high' ? <ShieldAlert className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{msg.source}</span>
                      <span className="text-[9px] font-bold text-zinc-700 uppercase">{msg.time}</span>
                    </div>
                    <h3 className={`text-sm tracking-tight ${msg.read ? 'text-zinc-400 font-medium' : 'text-zinc-100 font-black'}`}>
                      {msg.subject}
                    </h3>
                  </div>
                </div>
                {!msg.read && <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-900 bg-zinc-900/10 text-center">
            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] italic">Terhubung Pada Jaringan Terenkripsi Kominfo_v4.5</span>
        </div>
      </div>
    </div>
  );
}
