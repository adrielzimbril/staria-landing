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
    accent: "bg-agent-violet",
    progress: 78,
    queue: ["Hook optimized", "Visuals synced", "Export pending"],
    metrics: ["92", "84", "98"],
  },
  {
    name: "LinkedIn Post",
    prompt: "B2B thought leadership. Style: Minimalist architecture, insightful hooks.",
    image: "/img/modern-architectural-marvel-futuristic-building.jpg",
    accent: "bg-action-blue",
    progress: 62,
    queue: ["Tone matched", "Asset rendered", "Compliance check"],
    metrics: ["88", "91", "96"],
  },
  {
    name: "TikTok Trend",
    prompt: "Behind-the-scenes aesthetic. Vibe: Raw textures, engaging narrative.",
    image: "/img/model-translucent-fabric-with-floral-accent.jpg",
    accent: "bg-electric-blue",
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
    <section id="studio" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Interactive studio"
          title="A dashboard-like bento for orchestrating content agents."
          body="Deploy specialized agents for each platform. Tap through production flows and watch the surrounding cards update: script state, queue health, variants, and platform compliance."
        />

        <div className="mt-8 grid gap-3 lg:grid-cols-12">
          <article className="hairline-card min-h-[520px] overflow-hidden lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-chalk p-4 md:p-5">
                  <div className="flex items-center gap-2">
                <span
                  className={`render-pulse h-2.5 w-2.5 rounded-full ${flow.accent}`}
                />
                <span className="text-sm font-medium text-midnight-graphite">
                  {flow.name}
                </span>
              </div>
              <div className="flex gap-2">
                {flows.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      selectFlow(index);
                    }}
                    className={`h-8 rounded-full px-3 text-xs font-medium transition-colors ${
                      index === activeFlow
                        ? "bg-midnight-graphite text-canvas-white"
                        : "bg-cloud-white text-slate-gray hover:text-midnight-graphite"
                    }`}
                  >
                    0{index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 p-3 md:grid-cols-[1fr_230px] md:p-4">
              <div className="render-scan relative min-h-[380px] overflow-hidden rounded-[12px] bg-powder">
                <Image
                  key={flow.image}
                  src={flow.image}
                  alt={`${flow.name} generated preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover"
                />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-obsidian backdrop-blur">
                  {renderStages[renderStage]} / {activeToolLabels[activeTool]}
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-[12px] bg-white/90 p-3 backdrop-blur">
                  <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-powder">
                    <div className="render-fill h-full rounded-full bg-obsidian" />
                  </div>
                  <p className="font-mono text-[11px] leading-5 text-gravel">
                    {flow.prompt}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
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
                        setRenderStage(
                          Math.min(index + 1, renderStages.length - 1),
                        );
                      }}
                      className={`interactive-card flex min-h-24 items-start justify-between rounded-[12px] p-4 text-left ${
                        activeTool === index
                          ? "bg-obsidian text-eggshell"
                          : "bg-powder text-obsidian"
                      }`}
                    >
                      <span>
                        <LucideIcon
                          className={`mb-4 h-4 w-4 ${
                            activeTool === index
                              ? "text-eggshell"
                              : "text-obsidian"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`block text-sm font-medium ${
                            activeTool === index
                              ? "text-eggshell"
                              : "text-obsidian"
                          }`}
                        >
                          {label as string}
                        </span>
                        <span
                          className={`mt-1 block text-xs ${
                            activeTool === index
                              ? "text-eggshell/62"
                              : "text-gravel"
                          }`}
                        >
                          {value as string}
                        </span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          activeTool === index
                            ? "text-eggshell/60"
                            : "text-slate"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </article>

          <article className="hairline-card p-5 lg:col-span-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="label-type text-slate">Creation flow</p>
                <h3 className="display-type mt-3 text-4xl leading-[1.05] text-obsidian">
                  {visibleProgress}% through the current render path.
                </h3>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-powder">
                <Sparkles
                  className="h-4 w-4 text-obsidian"
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-cloud-white">
              <div
                className="h-full rounded-full bg-midnight-graphite transition-all duration-500"
                style={{ width: `${visibleProgress}%` }}
              />
            </div>

            <div className="mt-6 grid gap-3">
              {renderStages.slice(0, 4).map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-fog/20 pb-3 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        index <= renderStage
                          ? "bg-midnight-graphite text-canvas-white"
                          : "bg-cloud-white text-slate-gray"
                      }`}
                    >
                      {index <= renderStage ? (
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </span>
                    <span className="text-sm font-medium text-midnight-graphite">
                      {item}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-fog">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="hairline-card p-5 lg:col-span-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="label-type text-slate">Dashboard</p>
                <h3 className="mt-2 text-lg font-medium text-obsidian">
                  Production lanes
                </h3>
              </div>
              <Layers3 className="h-5 w-5 text-obsidian" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              {dashboardRows.map(([name, count, state, flowIndex], index) => (
                <button
                  key={name as string}
                  onClick={() => selectFlow(flowIndex as number)}
                  className="interactive-card grid w-full grid-cols-[1fr_auto] gap-3 rounded-[12px] px-2 text-left"
                >
                  <div>
                    <p className="text-sm font-medium text-obsidian">
                      {name as string}
                    </p>
                    <p className="mt-1 text-xs text-gravel">
                      {count as string}
                    </p>
                  </div>
                  <span
                    className={`h-fit rounded-full px-3 py-1.5 text-[11px] font-medium ${
                      index === activeFlow
                        ? "bg-obsidian text-eggshell"
                        : "bg-powder text-gravel"
                    }`}
                  >
                    {state as string}
                  </span>
                </button>
              ))}
            </div>
          </article>

          <article className="hairline-card overflow-hidden p-5 lg:col-span-5">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="label-type text-slate">Variant grid</p>
                <h3 className="mt-2 text-lg font-medium text-obsidian">
                  Active outputs
                </h3>
              </div>
              <ScanLine className="h-5 w-5 text-obsidian" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {variantTiles.map((tile, index) => (
                <button
                  key={tile.src}
                  onClick={() => {
                    selectFlow(index);
                    setSelectedVariant(index);
                    setRenderStage(2);
                  }}
                  className={`interactive-card relative aspect-square overflow-hidden rounded-lg bg-powder ${
                    index === selectedVariant ? "ring-3 ring-[#ebebeb]" : ""
                  }`}
                  aria-label={`Select ${tile.label} variant`}
                >
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </article>

          <article className="hairline-card bg-powder p-5 lg:col-span-3">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="label-type text-slate">Quality signal</p>
                <h3 className="mt-2 text-lg font-medium text-obsidian">
                  Review telemetry
                </h3>
              </div>
              <Gauge className="h-5 w-5 text-obsidian" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                [flow.metrics[0], "Style"],
                [flow.metrics[1], "Detail"],
                [flow.metrics[2], "Safe"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="display-type text-4xl leading-none text-obsidian">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-gravel">{label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                setRenderStage((current) => (current + 1) % renderStages.length)
              }
              className="pill-hover mt-8 inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-obsidian"
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
