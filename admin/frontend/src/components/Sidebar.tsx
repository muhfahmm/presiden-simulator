import Link from 'next/link';
import { Home, Users, BarChart2, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { title: 'Dashboard', icon: Home, href: '/' },
    { title: 'Users', icon: Users, href: '/users' },
    { title: 'Analytics', icon: BarChart2, href: '/analytics' },
    { title: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col bg-zinc-950 text-white transition-all duration-300 ease-in-out">
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Presiden Panel</span>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-6">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="border-t border-zinc-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
