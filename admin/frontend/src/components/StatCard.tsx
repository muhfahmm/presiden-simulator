import { ReactNode } from 'react';

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  icon: ReactNode;
};

export default function StatCard({ title, value, change, isIncrease, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</span>
        <div className="rounded-xl bg-zinc-100 p-2 dark:bg-zinc-800">{icon}</div>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{value}</h3>
        <p className={`mt-1 text-xs font-semibold ${isIncrease ? 'text-green-600' : 'text-red-500'}`}>
          {isIncrease ? '↑' : '↓'} {change} <span className="text-zinc-400">vs last month</span>
        </p>
      </div>
    </div>
  );
}
