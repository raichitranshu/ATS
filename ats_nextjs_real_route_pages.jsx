// Next.js ATS Route Pages Starter
// Copy these files into your Next.js project.

// =====================================================
// 1) src/app/login/page.tsx
// =====================================================
'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-900">
                ATS
              </div>
              <div>
                <h1 className="text-2xl font-bold">Trove ATS</h1>
                <p className="text-sm text-slate-300">Recruitment Portal</p>
              </div>
            </div>

            <div className="mt-16 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Login Experience
              </p>
              <h2 className="mt-5 text-5xl font-bold leading-tight">
                A clean portal for recruiters, team leaders, and admin.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-300">
                Recruiters can call candidates, update status, plan follow-ups, and track daily
                performance from one dashboard.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Daily Calls</p>
              <p className="mt-2 text-3xl font-bold">86</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Shortlisted</p>
              <p className="mt-2 text-3xl font-bold">19</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Selected</p>
              <p className="mt-2 text-3xl font-bold">6</p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                ATS
              </div>
              <div>
                <h1 className="text-xl font-bold">Trove ATS</h1>
                <p className="text-sm text-slate-500">Recruitment Portal</p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <p className="text-sm font-medium text-slate-500">Welcome back</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Sign in to continue</h2>
              <p className="mt-2 text-sm text-slate-500">
                Access recruiter dashboard, follow-ups, and live team reports.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="recruiter@company.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <Link
                href="/admin/dashboard"
                className="block w-full rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:opacity-90"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Role-based access: Admin, Team Leader, Recruiter
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// =====================================================
// 2) src/components/ats/sidebar.tsx
// =====================================================

import Link from 'next/link';

const menu = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Candidates', href: '/recruiter/candidates' },
  { label: 'Follow-ups', href: '/recruiter/followups' },
  { label: 'Reports', href: '/admin/reports' },
  { label: 'Upload Data', href: '/admin/upload' },
  { label: 'Assignments', href: '/admin/assignments' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
            ATS
          </div>
          <div>
            <h1 className="text-xl font-bold">Trove ATS</h1>
            <p className="text-sm text-slate-500">Recruitment Portal</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}

// =====================================================
// 3) src/components/ats/app-shell.tsx
// =====================================================

import type { ReactNode } from 'react';
import { Sidebar } from '@/components/ats/sidebar';

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-sm text-slate-500">{subtitle}</p>
              </div>
              {actions}
            </div>
          </header>

          <section className="px-4 py-6 sm:px-6 lg:px-8">{children}</section>
        </main>
      </div>
    </div>
  );
}

// =====================================================
// 4) src/app/admin/dashboard/page.tsx
// =====================================================

import { AppShell } from '@/components/ats/app-shell';

export default function AdminDashboardPage() {
  const kpis = [
    { label: 'Total Candidates', value: '1,248' },
    { label: 'Calls Today', value: '86' },
    { label: 'Follow-ups Due', value: '34' },
    { label: 'Shortlisted', value: '19' },
    { label: 'Selected', value: '6' },
    { label: 'Joined', value: '2' },
  ];

  const recruiters = [
    { name: 'Anjali', calls: 18, followups: 9, shortlisted: 4, selected: 1 },
    { name: 'Nisha', calls: 14, followups: 6, shortlisted: 3, selected: 1 },
    { name: 'Ravi', calls: 12, followups: 7, shortlisted: 2, selected: 0 },
    { name: 'Pooja', calls: 16, followups: 5, shortlisted: 5, selected: 2 },
  ];

  return (
    <AppShell
      title="Admin Dashboard"
      subtitle="Recruiter productivity, hiring pipeline, and daily operations."
      actions={
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="rounded-2xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Export Report
          </button>
          <button className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Upload Candidates
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{kpi.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Hiring Pipeline</h3>
              <p className="text-sm text-slate-500">Stage-wise hiring summary.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {[
              ['New', '320'],
              ['Follow-up', '210'],
              ['Shortlisted', '95'],
              ['Interview', '42'],
              ['Selected', '12'],
              ['Joined', '5'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4 text-center">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Recruiter Performance</h3>
          <p className="mt-1 text-sm text-slate-500">Daily productivity snapshot.</p>

          <div className="mt-5 space-y-3">
            {recruiters.map((person) => (
              <div key={person.name} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm text-slate-500">{person.calls} calls</p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white p-2">
                    <p className="text-slate-500">Follow-up</p>
                    <p className="mt-1 font-semibold">{person.followups}</p>
                  </div>
                  <div className="rounded-xl bg-white p-2">
                    <p className="text-slate-500">Shortlist</p>
                    <p className="mt-1 font-semibold">{person.shortlisted}</p>
                  </div>
                  <div className="rounded-xl bg-white p-2">
                    <p className="text-slate-500">Selected</p>
                    <p className="mt-1 font-semibold">{person.selected}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

// =====================================================
// 5) src/app/recruiter/dashboard/page.tsx
// =====================================================

import Link from 'next/link';
import { AppShell } from '@/components/ats/app-shell';

export default function RecruiterDashboardPage() {
  const recruiterStats = [
    { label: 'Assigned', value: '148' },
    { label: 'Calls Today', value: '18' },
    { label: 'Follow-ups Due', value: '9' },
    { label: 'Shortlisted', value: '4' },
    { label: 'Selected', value: '1' },
    { label: 'Joined', value: '0' },
  ];

  const todayQueue = [
    {
      name: 'Rahul Verma',
      mobile: '9876543210',
      role: 'BPO Executive',
      status: 'Follow-up',
      remark: 'Interested, asked to call before 11 AM.',
    },
    {
      name: 'Neha Gupta',
      mobile: '9765432101',
      role: 'Customer Care',
      status: 'New',
      remark: 'Fresh profile assigned today.',
    },
    {
      name: 'Vikas Sharma',
      mobile: '9810098100',
      role: 'Sales Executive',
      status: 'RNR',
      remark: 'Not reachable, retry after lunch.',
    },
  ];

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'Selected':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Follow-up':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'RNR':
        return 'bg-rose-50 text-rose-700 border border-rose-200';
      case 'New':
        return 'bg-slate-50 text-slate-700 border border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border border-slate-200';
    }
  };

  return (
    <AppShell
      title="Recruiter Dashboard"
      subtitle="Professional recruiter workspace with fast calling and follow-up actions."
      actions={
        <Link
          href="/recruiter/candidates"
          className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Open My Candidates
        </Link>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {recruiterStats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Today Priority Queue</h3>
              <p className="text-sm text-slate-500">Candidates that need immediate recruiter action.</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {todayQueue.map((item) => (
              <div
                key={`${item.name}-${item.mobile}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-slate-500">
                    {item.role} • {item.mobile}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{item.remark}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}>
                    {item.status}
                  </span>
                  <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Today Summary</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Follow-ups completed</span>
                <strong>7</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Callbacks pending</span>
                <strong>4</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Interviews lined up</span>
                <strong>2</strong>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <div className="mt-4 grid gap-3">
              <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:opacity-90">
                Add Feedback
              </button>
              <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Open Follow-ups
              </button>
              <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

// =====================================================
// 6) src/app/recruiter/candidates/page.tsx
// =====================================================

import { AppShell } from '@/components/ats/app-shell';

export default function RecruiterCandidatesPage() {
  const candidates = [
    {
      name: 'Rahul Verma',
      mobile: '9876543210',
      role: 'BPO Executive',
      status: 'Follow-up',
      nextFollowup: '11 Mar 2026',
    },
    {
      name: 'Neha Gupta',
      mobile: '9765432101',
      role: 'Customer Care',
      status: 'New',
      nextFollowup: '11 Mar 2026',
    },
    {
      name: 'Priya Singh',
      mobile: '9811122233',
      role: 'Customer Support',
      status: 'Shortlisted',
      nextFollowup: '12 Mar 2026',
    },
    {
      name: 'Rohit Mishra',
      mobile: '9900011223',
      role: 'Telecaller',
      status: 'Selected',
      nextFollowup: '13 Mar 2026',
    },
  ];

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'Selected':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Follow-up':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'RNR':
        return 'bg-rose-50 text-rose-700 border border-rose-200';
      case 'New':
        return 'bg-slate-50 text-slate-700 border border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border border-slate-200';
    }
  };

  return (
    <AppShell
      title="My Candidates"
      subtitle="Fast working table for recruiter calling updates."
      actions={
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search candidate"
            className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
          />
          <button className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Filter Status
          </button>
        </div>
      }
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-4">Candidate</th>
                <th className="px-4">Mobile</th>
                <th className="px-4">Role</th>
                <th className="px-4">Status</th>
                <th className="px-4">Next Follow-up</th>
                <th className="px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={`${candidate.name}-${candidate.mobile}`}>
                  <td className="rounded-l-2xl bg-slate-50 px-4 py-4 text-sm font-medium">{candidate.name}</td>
                  <td className="bg-slate-50 px-4 py-4 text-sm text-slate-600">{candidate.mobile}</td>
                  <td className="bg-slate-50 px-4 py-4 text-sm text-slate-600">{candidate.role}</td>
                  <td className="bg-slate-50 px-4 py-4 text-sm">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(candidate.status)}`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="bg-slate-50 px-4 py-4 text-sm text-slate-600">{candidate.nextFollowup}</td>
                  <td className="rounded-r-2xl bg-slate-50 px-4 py-4 text-sm">
                    <button className="rounded-xl border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-white">
                      Call / Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

// =====================================================
// 7) src/app/recruiter/followups/page.tsx
// =====================================================

import { AppShell } from '@/components/ats/app-shell';

export default function RecruiterFollowupsPage() {
  const rows = [
    { name: 'Rahul Verma', role: 'BPO Executive', date: '11 Mar 2026', priority: 'High' },
    { name: 'Amit Kumar', role: 'Sales Executive', date: '10 Mar 2026', priority: 'High' },
    { name: 'Neha Gupta', role: 'Customer Care', date: '11 Mar 2026', priority: 'Medium' },
  ];

  return (
    <AppShell
      title="Follow-ups"
      subtitle="Track due and overdue follow-up actions."
      actions={
        <button className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
          Add Follow-up
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Due Today</p>
          <p className="mt-3 text-3xl font-semibold">9</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Overdue</p>
          <p className="mt-3 text-3xl font-semibold">3</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Completed Today</p>
          <p className="mt-3 text-3xl font-semibold">7</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="p-2">Candidate</th>
                <th className="p-2">Role</th>
                <th className="p-2">Follow-up Date</th>
                <th className="p-2">Priority</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.name}-${row.date}`} className="border-t border-slate-200">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.role}</td>
                  <td className="p-2">{row.date}</td>
                  <td className="p-2">{row.priority}</td>
                  <td className="p-2">
                    <button className="rounded-xl border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
