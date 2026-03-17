import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import { Users, DollarSign, Activity, Eye } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1 pl-64 w-full">
        <Navbar />
        <main className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Overview Dashboard</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Selamat datang kembali di panel administrasi.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Users"
              value="1,234"
              change="12.5%"
              isIncrease={true}
              icon={<Users className="h-5 w-5 text-blue-500" />}
            />
            <StatCard
              title="Revenue"
              value="$45,231"
              change="8.2%"
              isIncrease={true}
              icon={<DollarSign className="h-5 w-5 text-emerald-500" />}
            />
            <StatCard
              title="Active Sessions"
              value="423"
              change="3.1%"
              isIncrease={false}
              icon={<Activity className="h-5 w-5 text-amber-500" />}
            />
            <StatCard
              title="Page Views"
              value="89,432"
              change="24.3%"
              isIncrease={true}
              icon={<Eye className="h-5 w-5 text-indigo-500" />}
            />
          </div>

          {/* Recent Activity Table Place holder */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Aktivitas Terbaru</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
                <thead className="border-b border-zinc-200 text-xs uppercase text-zinc-700 dark:border-zinc-800 dark:text-zinc-400">
                  <tr>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Aktivitas</th>
                    <th className="py-3 px-4">Waktu</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="py-4 px-4 font-medium text-zinc-900 dark:text-white">Admin Satu</td>
                    <td className="py-4 px-4">Mengubah pengaturan sistem</td>
                    <td className="py-4 px-4">2 menit yang lalu</td>
                    <td className="py-4 px-4"><span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">Sukses</span></td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="py-4 px-4 font-medium text-zinc-900 dark:text-white">User Dua</td>
                    <td className="py-4 px-4">Mendaftar akun baru</td>
                    <td className="py-4 px-4">1 jam yang lalu</td>
                    <td className="py-4 px-4"><span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">Sukses</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
