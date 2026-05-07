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
    accent: "bg-[#efdcb6]",
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
    accent: "bg-[#bad4d5]",
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
    accent: "bg-[#eba37e]",
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
    <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[var(--radius-cards)] bg-canvas-white border border-border-ash p-4 md:p-6 shadow-[rgba(0,0,0,0.02)_0_24px_48px]">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-border-ash pb-4">
        <div className="flex items-center gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              onClick={() => selectSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide
                  ? `w-8 ${item.accent}`
                  : "w-2.5 bg-fog-gray hover:bg-border-ash"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
        <p className="hidden font-mono text-[11px] text-medium-gray sm:block">
          staria/agent-orchestrator
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-buttons)] bg-fog-gray md:min-h-[540px]">
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 840px"
            className="object-cover"
            fetchPriority="high"
          />
          <div className="absolute left-6 top-6 rounded-full bg-canvas-white/90 px-4 py-2 text-xs font-bold text-midnight-ink shadow-subtle backdrop-blur">
            {flowTools[activeTool].description}
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-[var(--radius-buttons)] bg-canvas-white/95 p-6 shadow-subtle backdrop-blur-md">
            <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-fog-gray">
              <div
                className="h-full rounded-full bg-midnight-ink transition-all duration-300"
                style={{ width: `${toolProgress}%` }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-midnight-ink">
                  {slide.title}
                </p>
                <div className="mt-2 flex gap-3">
                  {slide.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-medium-gray">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="rounded-md bg-midnight-ink px-4 py-2 text-xs font-bold text-canvas-white">
                Step 0{activeTool + 1}
              </span>
            </div>
          </div>
        </div>

        <aside className="grid content-between gap-6">
          <div className="rounded-[var(--radius-buttons)] bg-fog-gray p-8">
            <p className="label-type mb-4 text-medium-gray text-[11px]">Agent Instructions</p>
            <p className="text-[16px] leading-7 text-midnight-ink font-medium">{slide.prompt}</p>
          </div>
          <div className="grid gap-2">
            {flowTools.map(({ icon: Icon, label, description }, index) => (
              <button
                key={label}
                onClick={() => setActiveTool(index)}
                className={`flex min-h-12 items-center justify-between rounded-[var(--radius-buttons)] px-5 text-sm font-bold transition-all ${
                  activeTool === index
                    ? "bg-midnight-ink text-canvas-white"
                    : "bg-canvas-white text-midnight-ink border border-border-ash hover:bg-fog-gray"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className={`h-4 w-4 ${
                      activeTool === index ? "text-canvas-white" : "text-medium-gray"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </span>
                <span
                  className={`hidden text-[11px] md:inline ${
                    activeTool === index ? "text-canvas-white/60" : "text-medium-gray"
                  }`}
                >
                  {description}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {slide.stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-md bg-fog-gray p-4 text-center border border-border-ash/50"
              >
                <strong className="display-type block text-2xl leading-none text-midnight-ink">
                  {value}
                </strong>
                <span className="mt-2 block text-[9px] leading-3 text-medium-gray uppercase font-bold tracking-widest">
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
                className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all ${
                  index === activeSlide ? "ring-2 ring-midnight-ink ring-offset-4" : "opacity-40 hover:opacity-100"
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
    <section className="px-4 pb-20 pt-32 md:pb-32 md:pt-44 bg-canvas-white relative overflow-hidden">
      {/* Decorative gradient background elements */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-15 blur-[120px] pointer-events-none rounded-full" 
        style={{ background: 'var(--gradient-peach-sunset)' }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-15 blur-[120px] pointer-events-none rounded-full" 
        style={{ background: 'var(--gradient-sea-mist)' }}
      />
      
      <div className="section-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-lg bg-fog-gray px-5 py-2.5 text-xs font-bold text-midnight-ink uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-midnight-ink animate-pulse" />
              AI Social Media Content Factory
            </div>
            <h1 className="display-type max-w-[calc(100vw-64px)] text-[clamp(2.5rem,10vw,6.5rem)] leading-[0.88] text-midnight-ink md:max-w-4xl tracking-tighter">
              Your AI agents <br />
              <span className="text-medium-gray">scale your voice.</span>
            </h1>
          </div>
          <div className="max-w-[calc(100vw-64px)] lg:max-w-xl lg:justify-self-end">
            <p className="body-type text-[20px] text-slate-text md:text-[22px] font-medium leading-relaxed">
              Staria turns your core ideas into multi-platform social systems. 
              Orchestrate specialized AI agents to draft, render, and schedule 
              content that stays perfectly in your brand voice.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link href="#cta" className="pill-primary h-16 px-10 text-xl">
                Deploy your factory
                <Rocket className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="#workflow" className="pill-secondary h-16 px-10 text-xl">
                See the workflow
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-28 hidden">
          <HeroStudioCard />
        </div>
      </div>
    </section>
  );
}
