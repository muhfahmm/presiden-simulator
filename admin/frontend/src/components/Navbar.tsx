import { Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex w-full max-w-md items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 dark:bg-zinc-900">
        <Search className="h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search something..."
          className="w-full bg-transparent border-none text-sm outline-none placeholder:text-zinc-400 text-zinc-800 dark:text-zinc-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
