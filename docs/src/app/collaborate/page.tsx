import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { MISSION } from "@/lib/constants";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Collaborate",
};

export default function CollaboratePage() {
  return (
    <>
      <PageHero
        title="Collaborate"
        subtitle="Join the team or partner on ground operations"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Collaborate" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Location
              </h2>
              <div className="mt-2 h-0.5 w-12 bg-accent" />
              <p className="mt-4 text-sm text-muted">
                {MISSION.department}
                <br />
                {MISSION.addressLines.slice(1).map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p className="mt-4 text-sm text-muted">
                We welcome Stony Brook students and external amateur radio
                partners interested in hardware, firmware, RF, documentation, or
                ground operations.
              </p>
              <p className="mt-4 text-sm text-muted">
                Direct email:{" "}
                <a href={`mailto:${MISSION.contactEmail}`}>{MISSION.contactEmail}</a>
              </p>
            </div>
          </Reveal>

          <Reveal y={12}>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Contact form
              </h2>
              <div className="mt-2 h-0.5 w-12 bg-accent" />
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
