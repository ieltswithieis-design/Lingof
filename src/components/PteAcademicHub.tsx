import React from "react";
import { ArrowRight, Clock3, CheckCircle2, Mic2, BookOpen, Headphones, PenLine, ShieldCheck } from "lucide-react";
import { ExamMeta, StandardizedTestPackage } from "../types/standardizedTests";

interface Props {
  meta: ExamMeta;
  packages: StandardizedTestPackage[];
  onStart: (packageId: string) => void;
  onBack: () => void;
}

export const PteAcademicHub: React.FC<Props> = ({ meta, packages, onStart, onBack }) => {
  const sections = meta.sections || [];
  return (
    <div className="space-y-7 pb-16">
      <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-9 shadow-sm">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        <button onClick={onBack} className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 cursor-pointer">← Back to Test Types</button>
        <div className="relative grid gap-6 lg:grid-cols-[1.4fr_.8fr] items-end">
          <div>
            <div className="mb-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-900">{meta.badge}</div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">PTE Academic</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Practice the current PTE Academic & UKVI structure with separate Speaking & Writing, Reading, and Listening sections.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold text-slate-700">
              <span className="rounded-lg bg-white px-3 py-2 border border-slate-200">3 parts</span>
              <span className="rounded-lg bg-white px-3 py-2 border border-slate-200">76–84 min S&W</span>
              <span className="rounded-lg bg-white px-3 py-2 border border-slate-200">23–30 min Reading</span>
              <span className="rounded-lg bg-white px-3 py-2 border border-slate-200">31–39 min Listening</span>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white/90 p-5">
            <div className="text-xs font-black uppercase tracking-wider text-slate-500">Current structure</div>
            <div className="mt-3 text-3xl font-black text-slate-950">22 question types</div>
            <p className="mt-1 text-xs text-slate-500">9 + 5 + 8 across the three parts</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {sections.map((section, i) => (
          <article key={section.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                {i === 0 ? <Mic2 className="h-5 w-5" /> : i === 1 ? <BookOpen className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-black"><Clock3 className="h-3 w-3" /> {section.duration}</span>
            </div>
            <h2 className="mt-4 text-lg font-black text-slate-900">{section.title}</h2>
            <div className="mt-4 space-y-2">
              {section.taskTypes.map((type, idx) => <div key={type} className="flex gap-2 text-xs text-slate-600"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" /><span><b className="text-slate-800">{idx + 1}.</b> {type}</span></div>)}
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 sm:p-8 text-white">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-wider"><ShieldCheck className="h-4 w-4" /> Practice Test Database</div>
        <h2 className="mt-2 text-2xl font-black">PTE Academic Mock Tests</h2>
        <p className="mt-2 text-sm text-slate-300">Every mock is stored as a database package, so an administrator can add, edit, publish, or remove tests without changing the application code.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {packages.map(pkg => (
            <button key={pkg.id} onClick={() => onStart(pkg.id)} className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left hover:border-amber-500/50 hover:bg-slate-800 transition cursor-pointer">
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-300">{pkg.difficulty}</div>
              <div className="mt-2 text-sm font-black text-white">{pkg.title}</div>
              <div className="mt-2 text-[11px] text-slate-400">{pkg.sections.reduce((n, s) => n + s.questions.length, 0)} stored questions · {pkg.edition}</div>
              <div className="mt-4 flex items-center gap-1 text-xs font-black text-amber-300">Start test <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></div>
            </button>
          ))}
          {packages.length === 0 && <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-sm text-slate-400">No published PTE tests yet. An administrator can add one from the Admin Testing Studio.</div>}
        </div>
      </section>
    </div>
  );
};
