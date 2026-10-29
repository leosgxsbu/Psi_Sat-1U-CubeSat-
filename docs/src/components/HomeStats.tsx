import { MISSION, DETECTION_SPECS } from "@/lib/constants";

export function HomeStats() {
  const energy = DETECTION_SPECS.find((s) => s.label === "Energy band")?.value || "—";
  return (
    <section className="bg-black py-10 text-white md:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3 md:px-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60">ENERGY BAND</p>
          <p className="mt-2 font-display text-2xl md:text-3xl">{energy}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60">ENVELOPE</p>
          <p className="mt-2 font-display text-2xl md:text-3xl">{MISSION.envelope}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60">MASS LIMIT</p>
          <p className="mt-2 font-display text-2xl md:text-3xl">{MISSION.massLimit}</p>
        </div>
      </div>
    </section>
  );
}

