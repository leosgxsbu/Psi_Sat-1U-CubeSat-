import { ContentsBox } from "@/components/ContentsBox";
import { DeadlineCard } from "@/components/DeadlineCard";
import { DETECTION_SPECS, MISSION } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { Sponsors } from "@/components/Sponsors";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { HomeStats } from "@/components/HomeStats";
import { RiseVisual } from "@/components/RiseVisual";

export const metadata: Metadata = {
  title: "Mission Overview",
};

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/backgrounds/earth-horizon.png"
        imageAlt="Earth horizon above low-Earth orbit"
        title={`${MISSION.codename} — ${MISSION.fullName}`}
        subtitle={MISSION.org}
      />
      <HomeStats />
      <SponsorMarquee
        logos={[
          { src: "/sponsors/ansys.svg", alt: "Ansys", href: "https://www.ansys.com/" },
        ]}
        speed={35}
      />
      <RiseVisual
        imageSrc="/placeholders/cubesat-silhouette.svg"
        imageAlt="Placeholder silhouette frame for PsiSAT CubeSat render"
        caption="Placeholder — swap with CubeSat render when available"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <Reveal>
          <ContentsBox
            items={[
              { id: "overview", label: "Overview" },
              { id: "vehicle", label: "Vehicle envelope" },
              { id: "detection", label: "Detection performance" },
              { id: "status", label: "CSLI timeline" },
              { id: "explore", label: "Project sections" },
            ]}
          />
        </Reveal>

        <article className="prose-page">
          <Reveal>
            <h2 id="overview" className="text-center">Overview</h2>
            <p>
              <strong>{MISSION.codename}</strong> (Low-Earth Orbit Gamma-Ray Mapping) is a
              Stony Brook University project to design a 1U CubeSat observatory for soft
              gamma rays and hard X-rays. The payload couples a{" "}
              <strong>50 × 50 × 3 mm CsI(Tl)</strong> scintillator to a{" "}
              <strong>Hamamatsu S13360-6050PE SiPM</strong>, with pulse timing on an{" "}
              <strong>STM32F411RET6</strong> flight computer. Open telemetry is intended for
              public release through <strong>SatNOGS</strong>.
            </p>
            <p>
              Authors (July 2026 proposal): {MISSION.authors.join(", ")}.
            </p>
          </Reveal>

          <Reveal y={16}>
            <h2 id="vehicle" className="text-center">Vehicle envelope</h2>
            <div className="my-8 not-prose overflow-x-auto">
              <table className="w-full border-collapse border border-line bg-white text-left text-sm">
                <tbody>
                  {[
                    ["External envelope", MISSION.envelope],
                    ["Mass limit (CSLI)", MISSION.massLimit],
                    ["Chassis", MISSION.chassis],
                    ["Nominal orbit", MISSION.orbit],
                    ["Attitude", MISSION.propulsion],
                    ["Organization", MISSION.org],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-line">
                      <th className="w-48 bg-paper-soft px-3 py-2.5 font-medium text-ink">
                        {k}
                      </th>
                      <td className="px-3 py-2.5 text-muted">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal y={16}>
            <h2 id="detection" className="text-center">Detection performance (proposal)</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse border border-line bg-white text-left text-sm">
                <tbody>
                  {DETECTION_SPECS.map((row) => (
                    <tr key={row.label} className="border-b border-line">
                      <th className="w-56 bg-paper-soft px-3 py-2.5 font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="px-3 py-2.5 text-muted">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Background rejection uses a rolling <strong>5σ</strong> threshold:{" "}
              <code>Trigger = Mean + 5σ</code>. Burst duration is inferred from pulse
              timestamps on EXTI10 (short events ~1–5 s; longer events up to ~40–60 s in
              proposal examples).
            </p>
            <p>
              <strong>Current build status:</strong> we are designing the board stack.
              The <strong>STM32 flight computer board (Stage 3)</strong> schematic is
              nearly complete. Next, we&apos;ll do a low‑cost bench test of the{" "}
              <strong>CsI(Tl) crystal + SiPM</strong> detector and create a development
              board for flight software, before any flight hardware.
            </p>
          </Reveal>

          <Reveal y={16}>
            <h2 id="status" className="text-center">CSLI timeline</h2>
            <p>
              NASA&apos;s CubeSat Launch Initiative page (updated Oct 14, 2026) indicates
              the next CSLI solicitation is anticipated in <strong>2028</strong>. PsiSAT is
              now targeting the 2028 call. IARU coordination and FCC planning will proceed
              alongside design work.
            </p>
            <div className="not-prose my-6 max-w-xl">
              <DeadlineCard />
            </div>
          </Reveal>

          <h2 id="explore">Project sections</h2>
        </article>

        <Reveal y={10}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/architecture",
                title: "Architecture",
                body: "Six-stage 95 mm PCB stack and part list.",
              },
              {
                href: "/repository",
                title: "Repository",
                body: "CAD, electrical design, firmware, and compliance folders.",
              },
              {
                href: "/ground-station",
                title: "Ground Station",
                body: "UHF downlink parameters and SatNOGS reception.",
              },
              {
                href: "/collaborate",
                title: "Collaborate",
                body: "Department contact and collaboration form.",
              },
            ].map((card, i) => (
              <Link
                key={card.href}
                href={card.href}
                className="block transform border border-line bg-white p-5 no-underline shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-1 text-sm text-muted">{card.body}</p>
                <p className="mt-3 text-xs text-link">Open page →</p>
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal y={10}>
          <Sponsors />
        </Reveal>
      </div>
    </>
  );
}
