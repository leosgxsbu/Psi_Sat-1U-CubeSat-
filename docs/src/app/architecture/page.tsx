import { ContentsBox } from "@/components/ContentsBox";
import { PageHero } from "@/components/PageHero";
import { MISSION, PCB_STAGES } from "@/lib/constants";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Architecture",
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        title="Six-Layer PCB Architecture"
        subtitle={`${MISSION.codename} internal stack — 95.0 × 95.0 mm decks`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Architecture" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <Reveal>
          <ContentsBox
            items={PCB_STAGES.map((s) => ({
              id: `stage-${s.id}`,
              label: `Stage ${s.id}: ${s.name}`,
            }))}
          />
        </Reveal>

        <article className="prose-page">
          <Reveal>
            <p>
              The {MISSION.codename} bus uses PCBs as load-bearing tiers inside a{" "}
              {MISSION.envelope} aluminum chassis. Decks are spaced on M3 stainless threaded
              rods with dual 40-pin 2.54 mm stacking headers on the left and right edges for
              power and signal distribution.
            </p>
            <p>
              <strong>Current build status:</strong> the team is designing the board stack.
              The <strong>STM32 flight computer board (Stage 3)</strong> schematic is
              nearly complete. Next, we plan a low‑cost bench test of the{" "}
              <strong>CsI(Tl) crystal + SiPM</strong> detector and a development board for
              flight software, before any flight hardware.
            </p>
          </Reveal>

          <div className="not-prose mt-8 space-y-4">
            {PCB_STAGES.map((stage, i) => (
              <Reveal key={stage.id} y={16} delay={i * 0.04}>
                <section
                  id={`stage-${stage.id}`}
                  className="scroll-mt-24 border border-line bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-sm font-medium text-accent-dark">
                    Stage {stage.id}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink">
                    {stage.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{stage.dims}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink">
                    {stage.hardware.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
