import React from "react";
import { VisualType } from "../types/ielts";

interface VisualChartRendererProps {
  visual: VisualType;
  title?: string;
}

export const VisualChartRenderer: React.FC<VisualChartRendererProps> = ({ visual, title }) => {
  if (!visual) return null;

  // Normalize both the legacy renderer schema and the imported database schema.
  // Imported tests must never crash the whole application because an optional
  // chart array is absent or because the schema uses `type` instead of `kind`.
  const raw = visual as any;
  const type = String(raw.kind ?? raw.type ?? "").toLowerCase();
  const normalized: any = { ...raw };

  if (type.includes("table")) {
    normalized.kind = "table";
    normalized.headers = Array.isArray(raw.headers) ? raw.headers : (Array.isArray(raw.columns) ? raw.columns : []);
    normalized.rows = Array.isArray(raw.rows)
      ? raw.rows.map((row: any) => Array.isArray(row) ? row : [row?.category ?? "", ...(Array.isArray(row?.values) ? row.values : [])])
      : [];
  } else if (type.includes("pie")) {
    normalized.kind = "pie";
    const data = Array.isArray(raw.data) ? raw.data : [];
    normalized.labels = Array.isArray(raw.labels) ? raw.labels : data.map((d: any) => String(d?.label ?? ""));
    normalized.values = Array.isArray(raw.values) ? raw.values : data.map((d: any) => Number(d?.value ?? 0));
  } else if (type.includes("process")) {
    normalized.kind = "process";
    normalized.steps = Array.isArray(raw.steps) ? raw.steps : [];
  } else if (type.includes("map")) {
    normalized.kind = "map";
    normalized.before = Array.isArray(raw.before) ? raw.before : [];
    normalized.after = Array.isArray(raw.after) ? raw.after : [];
  } else if (type.includes("line") || type.includes("bar")) {
    normalized.kind = type.includes("bar") ? "bar" : "line";
    const data = Array.isArray(raw.data) ? raw.data : [];
    normalized.labels = Array.isArray(raw.labels) ? raw.labels : data.map((d: any) => String(d?.label ?? ""));
    normalized.series = Array.isArray(raw.series) ? raw.series : [{ name: raw.title || "Series", values: data.map((d: any) => Number(d?.value ?? 0)) }];
  }

  visual = normalized;

  // 1. Table Visual
  if (visual.kind === "table") {
    return (
      <div className="my-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        {title && <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600">{title}</div>}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
              <tr>
                {visual.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-center first:text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visual.rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-slate-50/60 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-center first:text-left font-medium text-slate-800">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 2. Process Diagram
  if (visual.kind === "process") {
    return (
      <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Flow of Process Stages</h4>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {visual.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center rounded-lg border border-blue-200 bg-blue-50/60 px-4 py-3 text-center transition-all hover:shadow-xs">
                <span className="mb-1 text-[11px] font-bold text-blue-600 uppercase tracking-widest">Stage {idx + 1}</span>
                <span className="text-sm font-semibold text-slate-800">{step}</span>
              </div>
              {idx < visual.steps.length - 1 && (
                <div className="text-blue-500 font-bold text-lg hidden sm:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // 3. Map (Before & After)
  if (visual.kind === "map") {
    return (
      <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Comparative Layout (Before vs. After)</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-4">
            <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-amber-800">Layout Before Development</span>
            <div className="grid grid-cols-1 gap-2.5">
              {visual.before.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-md border border-amber-200/80 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-4">
            <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-emerald-800">Layout After Redevelopment</span>
            <div className="grid grid-cols-1 gap-2.5">
              {visual.after.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-md border border-emerald-200/80 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Pie Chart
  if (visual.kind === "pie") {
    const total = visual.values.reduce((a, b) => a + b, 0);
    const colors = ["#2563eb", "#0891b2", "#059669", "#d97706", "#7c3aed", "#e11d48"];

    return (
      <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Proportional Distribution (%)</h4>
        <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
          <div className="relative h-44 w-44">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              {(() => {
                let accumulatedPercent = 0;
                return visual.values.map((val, idx) => {
                  const percent = (val / total) * 100;
                  const strokeDasharray = `${percent} ${100 - percent}`;
                  const strokeDashoffset = -accumulatedPercent;
                  accumulatedPercent += percent;
                  return (
                    <circle
                      key={idx}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={colors[idx % colors.length]}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      pathLength="100"
                    />
                  );
                });
              })()}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs font-bold text-slate-400">TOTAL</span>
              <span className="text-sm font-extrabold text-slate-800">100%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {visual.labels.map((label, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: colors[idx % colors.length] }}
                ></span>
                <span className="font-semibold text-slate-700">{label}:</span>
                <span className="font-bold text-slate-900">{visual.values[idx]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 5. Line Chart / Bar Chart
  const seriesColors = ["#2563eb", "#dc2626", "#16a34a", "#9333ea", "#d97706"];
  const allValues = visual.series.flatMap(s => s.values);
  const maxValue = Math.max(...allValues, 10);
  const chartHeight = 180;

  if (visual.kind === "bar") {
    return (
      <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Comparative Bar Chart</h4>
          <div className="flex flex-wrap gap-3">
            {visual.series.map((s, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: seriesColors[idx % seriesColors.length] }}></span>
                {s.name}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto pt-4">
          <div className="flex min-w-[340px] items-end justify-around gap-4 border-b border-slate-200 pb-2" style={{ height: chartHeight + 20 }}>
            {visual.labels.map((label, lIdx) => (
              <div key={lIdx} className="flex flex-col items-center gap-1">
                <div className="flex items-end gap-1.5" style={{ height: chartHeight }}>
                  {visual.series.map((s, sIdx) => {
                    const val = s.values[lIdx] ?? 0;
                    const h = Math.max(6, Math.round((val / maxValue) * chartHeight));
                    return (
                      <div
                        key={sIdx}
                        title={`${s.name} (${label}): ${val}`}
                        className="group relative w-5 sm:w-7 rounded-t-sm transition-all hover:brightness-110"
                        style={{ height: h, backgroundColor: seriesColors[sIdx % seriesColors.length] }}
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-1 py-0.5 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {val}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <span className="mt-1 text-xs font-semibold text-slate-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 6. Line Graph
  return (
    <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Trends Line Graph</h4>
        <div className="flex flex-wrap gap-3">
          {visual.series.map((s, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <span className="h-0.5 w-4" style={{ backgroundColor: seriesColors[idx % seriesColors.length] }}></span>
              {s.name}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="relative min-w-[460px] h-[220px] p-2">
          {/* Y Axis reference lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400">
            <div className="border-b border-slate-100 pb-0.5 flex justify-between"><span>{maxValue}%</span></div>
            <div className="border-b border-slate-100 pb-0.5 flex justify-between"><span>{Math.round(maxValue * 0.75)}%</span></div>
            <div className="border-b border-slate-100 pb-0.5 flex justify-between"><span>{Math.round(maxValue * 0.5)}%</span></div>
            <div className="border-b border-slate-100 pb-0.5 flex justify-between"><span>{Math.round(maxValue * 0.25)}%</span></div>
            <div className="border-b border-slate-200 flex justify-between"><span>0%</span></div>
          </div>

          {/* SVG curves */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 200" preserveAspectRatio="none">
            {visual.series.map((s, sIdx) => {
              const points = s.values.map((v, i) => {
                const x = 30 + (i / (visual.labels.length - 1)) * 440;
                const y = 190 - (v / maxValue) * 180;
                return `${x},${y}`;
              }).join(" ");

              return (
                <g key={sIdx}>
                  <polyline
                    fill="none"
                    stroke={seriesColors[sIdx % seriesColors.length]}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                  {s.values.map((v, i) => {
                    const x = 30 + (i / (visual.labels.length - 1)) * 440;
                    const y = 190 - (v / maxValue) * 180;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill="#fff"
                        stroke={seriesColors[sIdx % seriesColors.length]}
                        strokeWidth="2"
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {/* X Axis Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 text-xs font-semibold text-slate-600">
            {visual.labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
