"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  History,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Rocket,
  Share2,
  Video,
} from "lucide-react";

const heroSlides = [
  {
    title: "Lifestyle Reel Script",
    image: "/img/glow-glitter-portrait-beautiful-woman.jpg",
    alt: "AI-generated social media lifestyle content",
    prompt:
      "Hook: 'Why your brand is stuck.' Visual: Soft bokeh, high-end lifestyle. Audio: Trending minimal lo-fi.",
    tags: ["viral-hook", "9:16", "brand-synced"],
    accent: "bg-agent-violet",
    stats: [
      ["10x", "Velocity"],
      ["99", "Voice match"],
      ["8", "Platforms"],
    ],
  },
  {
    title: "Tech Industry Carousel",
    image: "/img/modern-architectural-marvel-futuristic-building.jpg",
    alt: "AI-generated architectural social content",
    prompt:
      "5 slides explaining AI future. Style: Minimalist architecture, cool tones, precise typography overlay.",
    tags: ["educational", "1:1", "high-retention"],
    accent: "bg-action-blue",
    stats: [
      ["8s", "Draft time"],
      ["92", "Voice match"],
      ["5", "Slides"],
    ],
  },
  {
    title: "Fashion Narrative Short",
    image: "/img/model-translucent-fabric-with-floral-accent.jpg",
    alt: "AI-generated fashion social content",
    prompt:
      "Atmospheric fashion short. Narrative: 'The invisible thread.' Visual: Dreamy, ethereal lighting, fabric detail.",
    tags: ["storytelling", "9:16", "art-house"],
    accent: "bg-electric-blue",
    stats: [
      ["15s", "Render"],
      ["96", "Voice match"],
      ["12", "Variants"],
    ],
  },
];

const flowTools = [
  {
    icon: PenTool,
    label: "Script",
    description: "AI Draft",
  },
  {
    icon: Video,
    label: "Video",
    description: "Agent Edit",
  },
  {
    icon: MessageSquare,
    label: "Voice",
    description: "Brand Tone",
  },
  {
    icon: Share2,
    label: "Sync",
    description: "Auto-Publish",
  },
];

function HeroStudioCard() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
      setActiveTool(0);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const toolProgress = useMemo(() => 38 + activeTool * 18 + activeSlide * 4, [
    activeSlide,
    activeTool,
  ]);

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    setActiveTool(0);
  };

  return (
    <div className="hairline-card max-w-[calc(100vw-32px)] overflow-hidden p-3 md:p-4 bg-canvas-white border border-fog/20 shadow-card">
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-cloud-white pb-3">
        <div className="flex items-center gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              onClick={() => selectSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide
                  ? `w-8 ${item.accent}`
                  : "w-2.5 bg-fog hover:bg-slate-gray"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
        <p className="hidden font-mono text-[11px] text-slate-gray sm:block">
          staria/agent-orchestrator
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[12px] bg-cloud-white md:min-h-[500px]">
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 780px"
            className="object-cover"
            fetchPriority="high"
          />
          <div className="absolute left-3 top-3 rounded-full bg-canvas-white/90 px-3 py-1.5 text-xs font-medium text-midnight-graphite shadow-subtle backdrop-blur">
            {flowTools[activeTool].description}
          </div>
          <div className="absolute inset-x-3 bottom-3 rounded-[12px] bg-canvas-white/90 p-3 shadow-subtle backdrop-blur-md">
            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-cloud-white">
              <div
                className="h-full rounded-full bg-midnight-graphite transition-all duration-300"
                style={{ width: `${toolProgress}%` }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-midnight-graphite">
                  {slide.title}
                </p>
                <p className="mt-1 font-mono text-[11px] text-slate-gray">
                  {slide.tags.map((tag) => `[${tag}]`).join(" ")}
                </p>
              </div>
              <span className="rounded-full bg-midnight-graphite px-3 py-1.5 text-xs font-medium text-canvas-white">
                Step 0{activeTool + 1}
              </span>
            </div>
          </div>
        </div>

        <aside className="grid content-between gap-3">
          <div className="rounded-[12px] bg-cloud-white p-3">
            <p className="label-type mb-3 text-slate-gray">Agent Instructions</p>
            <p className="text-sm leading-6 text-midnight-graphite">{slide.prompt}</p>
          </div>
          <div className="grid gap-2">
            {flowTools.map(({ icon: Icon, label, description }, index) => (
              <button
                key={label}
                onClick={() => setActiveTool(index)}
                className={`interactive-card flex min-h-11 items-center justify-between rounded-[12px] px-3 text-sm font-medium ${
                  activeTool === index
                    ? "bg-midnight-graphite text-canvas-white"
                    : "border border-cloud-white bg-canvas-white text-midnight-graphite"
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Icon
                    className={`h-4 w-4 ${
                      activeTool === index ? "text-canvas-white" : "text-slate-gray"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </span>
                <span
                  className={`hidden text-[11px] md:inline ${
                    activeTool === index ? "text-canvas-white/60" : "text-slate-gray"
                  }`}
                >
                  {description}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {slide.stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[12px] bg-cloud-white p-3 text-left"
              >
                <strong className="display-type block text-xl leading-none text-midnight-graphite">
                  {value}
                </strong>
                <span className="mt-2 block text-[10px] leading-3 text-slate-gray uppercase font-semibold tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => selectSlide(index)}
                className={`interactive-card relative aspect-[4/3] overflow-hidden rounded-[10px] ${
                  index === activeSlide ? "ring-2 ring-midnight-graphite" : ""
                }`}
                aria-label={`Select ${item.title}`}
              >
                <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-4 pb-16 pt-28 md:pb-24 md:pt-36 bg-canvas-white relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 opacity-30 blur-3xl pointer-events-none rounded-full" 
        style={{ background: 'var(--gradient-digital-dawn)' }}
      />
      
      <div className="section-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-sm text-slate-gray font-medium">
              <span className="h-2 w-2 rounded-full bg-agent-violet animate-pulse" />
              Day 7 / AI social media content factory
            </p>
            <h1 className="display-type max-w-[calc(100vw-64px)] text-[clamp(2.5rem,11vw,5.2rem)] leading-[0.92] text-midnight-graphite md:max-w-4xl">
              Your AI agents <br />
              <span className="agent-gradient-text">can scale your voice.</span>
            </h1>
          </div>
          <div className="max-w-[calc(100vw-64px)] lg:max-w-xl lg:justify-self-end">
            <p className="text-[17px] leading-8 text-slate-gray md:text-[19px] font-medium">
              Staria turns your core ideas into multi-platform social systems. 
              Orchestrate specialized AI agents to draft, render, and schedule 
              content that stays perfectly in your brand voice.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#cta" className="pill-primary">
                Deploy your factory
                <Rocket className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#workflow" className="pill-secondary">
                See the workflow
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <HeroStudioCard />
        </div>
      </div>
    </section>
  );
}
