"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Crop,
  Gauge,
  ImagePlus,
  Layers3,
  ScanLine,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { imageTiles } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

const flows = [
  {
    name: "Instagram Reel",
    prompt: "Seasonal fashion launch. Vibe: High-energy, rapid cuts, trending audio.",
    image: "/img/glow-glitter-portrait-beautiful-woman.jpg",
    accent: "bg-midnight-ink",
    progress: 78,
    queue: ["Hook optimized", "Visuals synced", "Export pending"],
    metrics: ["92", "84", "98"],
  },
  {
    name: "LinkedIn Post",
    prompt: "B2B thought leadership. Style: Minimalist architecture, insightful hooks.",
    image: "/img/modern-architectural-marvel-futuristic-building.jpg",
    accent: "bg-medium-gray",
    progress: 62,
    queue: ["Tone matched", "Asset rendered", "Compliance check"],
    metrics: ["88", "91", "96"],
  },
  {
    name: "TikTok Trend",
    prompt: "Behind-the-scenes aesthetic. Vibe: Raw textures, engaging narrative.",
    image: "/img/model-translucent-fabric-with-floral-accent.jpg",
    accent: "bg-slate-text",
    progress: 91,
    queue: ["Brief parsed", "Script locked", "Ready for post"],
    metrics: ["95", "89", "97"],
  },
];

const dashboardRows = [
  ["Primary Reel", "12 versions", "Approved", 0],
  ["Social Crops", "36 assets", "In review", 1],
  ["Thread Set", "8 posts", "Queued", 2],
];

const renderStages = [
  "Brief analysis",
  "Agent assignment",
  "Creative drafting",
  "Compliance check",
  "Scheduling ready",
];

const activeToolLabels = ["Brief", "Orchestrate", "Ship"];

export function StudioBento() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [renderStage, setRenderStage] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const flow = flows[activeFlow];
  const visibleProgress = Math.min(
    98,
    flow.progress + renderStage * 3 + activeTool * 2,
  );
  const variantTiles = imageTiles.slice(0, 3);

  const selectFlow = (index: number) => {
    setActiveFlow(index);
    setSelectedVariant(index);
    setActiveTool(0);
    setRenderStage(0);
  };

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveFlow((current) => {
        const next = (current + 1) % flows.length;
        setSelectedVariant(next);
        return next;
      });
      setActiveTool(0);
      setRenderStage(0);
    }, 6000);

    const stageTimer = window.setInterval(() => {
      setRenderStage((current) => (current + 1) % renderStages.length);
    }, 1400);

    return () => {
      window.clearInterval(slideTimer);
      window.clearInterval(stageTimer);
    };
  }, []);

  return (
    <section id="studio" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Interactive studio"
          title="A dashboard-like bento for orchestrating content agents."
          body="Deploy specialized agents for each platform. Tap through production flows and watch the surrounding cards update: script state, queue health, variants, and platform compliance."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Main Visualizer Card */}
          <article className="interactive-card min-h-[560px] overflow-hidden !p-0 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-ash p-6">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full animate-pulse ${flow.accent}`}
                />
                <span className="label-type text-midnight-ink">
                  {flow.name}
                </span>
              </div>
              <div className="flex gap-2">
                {flows.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => selectFlow(index)}
                    className={`h-8 min-w-[32px] rounded-full px-2 text-[11px] font-bold transition-all ${
                      index === activeFlow
                        ? "bg-midnight-ink text-canvas-white shadow-sm"
                        : "bg-fog-gray text-slate-text hover:bg-border-ash"
                    }`}
                  >
                    0{index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-[1fr_240px]">
              <div className="relative min-h-[400px] overflow-hidden rounded-[40px] bg-fog-gray shadow-inner">
                <Image
                  key={flow.image}
                  src={flow.image}
                  alt={`${flow.name} generated preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-1000"
                />
                <div className="absolute left-4 top-4 rounded-full bg-canvas-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-midnight-ink backdrop-blur-md shadow-sm">
                  {renderStages[renderStage]}
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[32px] bg-canvas-white/95 p-5 backdrop-blur-md shadow-lg border border-white/20">
                  <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-fog-gray">
                    <div 
                      className="h-full rounded-full bg-midnight-ink transition-all duration-500" 
                      style={{ width: `${visibleProgress}%` }}
                    />
                  </div>
                  <p className="body-type text-[13px] leading-relaxed text-midnight-ink italic">
                    "{flow.prompt}"
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  [
                    ImagePlus,
                    "Input",
                    activeTool === 0 && renderStage > 0
                      ? "Reference locked"
                      : "Reference + prompt",
                  ],
                  [
                    SlidersHorizontal,
                    "Control",
                    activeTool === 1 ? "Seed stabilized" : "Style strength 82%",
                  ],
                  [
                    Crop,
                    "Format",
                    activeTool === 2 ? "Exports staged" : "4:5, 16:9, 1:1",
                  ],
                ].map(([Icon, label, value], index) => {
                  const LucideIcon = Icon as typeof ImagePlus;

                  return (
                    <button
                      key={label as string}
                      onClick={() => {
                        setActiveTool(index);
                        setRenderStage(Math.min(index + 1, renderStages.length - 1));
                      }}
                      className={`group flex flex-col justify-between rounded-[32px] border p-5 text-left transition-all duration-200 ${
                        activeTool === index
                          ? "bg-midnight-ink text-canvas-white border-midnight-ink shadow-md"
                          : "bg-canvas-white text-midnight-ink border-border-ash hover:border-medium-gray"
                      }`}
                    >
                      <LucideIcon
                        className={`h-5 w-5 ${
                          activeTool === index ? "text-canvas-white" : "text-slate-text"
                        }`}
                      />
                      <div className="mt-4">
                        <span className="label-type block text-[12px] opacity-70">
                          {label as string}
                        </span>
                        <span className="display-type block mt-1 text-[14px]">
                          {value as string}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </article>

          {/* Creation Flow Card */}
          <article className="interactive-card flex flex-col justify-between !p-10 lg:col-span-5">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="label-type text-slate-text">Creation flow</p>
                  <h3 className="display-type mt-4 text-4xl leading-[1.1] text-midnight-ink">
                    {visibleProgress}% ready for ship.
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fog-gray text-midnight-ink">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-10 h-3 overflow-hidden rounded-full bg-fog-gray shadow-inner">
                <div
                  className="h-full rounded-full bg-midnight-ink transition-all duration-1000 ease-out"
                  style={{ width: `${visibleProgress}%` }}
                />
              </div>

              <div className="mt-10 space-y-2">
                {renderStages.slice(0, 4).map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl p-3 transition-colors hover:bg-fog-gray"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                          index <= renderStage
                            ? "bg-midnight-ink text-canvas-white"
                            : "bg-border-ash text-medium-gray"
                        }`}
                      >
                        {index <= renderStage ? (
                          <Check className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Clock3 className="h-4 w-4" aria-hidden="true" />
                        )}
                      </div>
                      <span className={`text-[15px] font-medium ${index <= renderStage ? "text-midnight-ink" : "text-slate-text"}`}>
                        {item}
                      </span>
                    </div>
                    <span className="font-mono text-[12px] font-bold text-medium-gray opacity-40">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Production Lanes */}
          <article className="interactive-card !p-8 lg:col-span-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="label-type text-slate-text">Dashboard</p>
                <h3 className="display-type mt-2 text-xl text-midnight-ink">
                  Production lanes
                </h3>
              </div>
              <Layers3 className="h-5 w-5 text-midnight-ink opacity-40" />
            </div>
            <div className="space-y-3">
              {dashboardRows.map(([name, count, state, flowIndex], index) => (
                <button
                  key={name as string}
                  onClick={() => selectFlow(flowIndex as number)}
                  className={`group flex w-full items-center justify-between rounded-[32px] border p-4 transition-all ${
                    index === activeFlow
                      ? "bg-midnight-ink border-midnight-ink shadow-md"
                      : "bg-canvas-white border-border-ash hover:border-medium-gray"
                  }`}
                >
                  <div className="text-left">
                    <p className={`text-[15px] font-semibold ${index === activeFlow ? "text-canvas-white" : "text-midnight-ink"}`}>
                      {name as string}
                    </p>
                    <p className={`text-[12px] ${index === activeFlow ? "text-canvas-white/60" : "text-slate-text"}`}>
                      {count as string}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                      index === activeFlow
                        ? "bg-canvas-white/10 text-canvas-white"
                        : "bg-fog-gray text-slate-text"
                    }`}
                  >
                    {state as string}
                  </span>
                </button>
              ))}
            </div>
          </article>

          {/* Variant Grid */}
          <article className="interactive-card !p-8 lg:col-span-5">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="label-type text-slate-text">Variant grid</p>
                <h3 className="display-type mt-2 text-xl text-midnight-ink">
                  Active outputs
                </h3>
              </div>
              <ScanLine className="h-5 w-5 text-midnight-ink opacity-40" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {variantTiles.map((tile, index) => (
                <button
                  key={tile.src}
                  onClick={() => {
                    selectFlow(index);
                    setSelectedVariant(index);
                    setRenderStage(2);
                  }}
                  className={`group relative aspect-square overflow-hidden rounded-[24px] border-2 transition-all ${
                    index === selectedVariant 
                      ? "border-midnight-ink scale-95" 
                      : "border-transparent hover:border-border-ash"
                  }`}
                  aria-label={`Select ${tile.label} variant`}
                >
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </article>

          {/* Quality Signal */}
          <article className="interactive-card !bg-fog-gray !border-none !p-8 lg:col-span-3">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="label-type text-slate-text">Quality signal</p>
                <h3 className="display-type mt-2 text-xl text-midnight-ink">
                  Review telemetry
                </h3>
              </div>
              <Gauge className="h-5 w-5 text-midnight-ink opacity-40" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                [flow.metrics[0], "Style"],
                [flow.metrics[1], "Detail"],
                [flow.metrics[2], "Safe"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="display-type text-4xl text-midnight-ink">
                    {value}
                  </p>
                  <p className="label-type mt-2 text-[10px] text-slate-text">{label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setRenderStage((current) => (current + 1) % renderStages.length)}
              className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight-ink py-4 text-[14px] font-bold text-canvas-white transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
            >
              Open report
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
