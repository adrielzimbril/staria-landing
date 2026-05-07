import Image from "next/image";
import { imageTiles } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Gallery() {
  return (
    <section id="gallery" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Generated output"
          title="From a single style brief to a complete visual set."
          body="The page uses production imagery as proof, not decoration. Staria's promise is image continuity across formats, subjects, and campaign needs."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {imageTiles.slice(3).map((tile, index) => (
            <article
              key={tile.src}
              className={`interactive-card group relative min-h-[320px] overflow-hidden !p-0 ${
                index === 0 || index === 6
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="label-type rounded-md bg-canvas-white/90 px-4 py-2 text-[10px] text-midnight-ink shadow-subtle backdrop-blur-md">
                  {tile.label}
                </span>
                <span className="font-mono rounded-md bg-midnight-ink/80 px-4 py-2 text-[10px] tracking-tighter text-canvas-white backdrop-blur-md">
                  V0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
