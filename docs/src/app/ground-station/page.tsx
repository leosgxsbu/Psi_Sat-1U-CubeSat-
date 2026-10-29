import { ContentsBox } from "@/components/ContentsBox";
import { PageHero } from "@/components/PageHero";
import { MISSION } from "@/lib/constants";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ground Station",
};

export default function GroundStationPage() {
  return (
    <>
      <PageHero
        title="Ground Station & Open Data"
        subtitle={`Receiving ${MISSION.codename} UHF telemetry`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Ground Station" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <Reveal>
          <ContentsBox
            items={[
              { id: "specs", label: "RF specifications" },
              { id: "receive", label: "How to receive" },
              { id: "satnogs", label: "SatNOGS" },
              { id: "data", label: "Data format" },
            ]}
          />
        </Reveal>

        <article className="prose-page">
          <Reveal>
            <h2 id="specs">RF specifications</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse border border-line bg-white text-left text-sm">
                <tbody>
                  {[
                    ["IARU band (coordination)", MISSION.frequencyBand],
                    ["Antenna target", MISSION.frequency],
                    ["Transceiver module", MISSION.transceiver],
                    ["Modulation", MISSION.baud],
                    ["Framing", `${MISSION.protocol} UI frames`],
                    ["Downlink", "Open science telemetry"],
                    ["Uplink", "Encrypted telecommand (proposal)"],
                    ["Ground network", "SatNOGS"],
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

          <Reveal y={12}>
            <h2 id="receive">How to receive</h2>
            <p>
              After the mandatory <strong>45-minute post-deploy silence</strong>, licensed
              operators can decode the downlink with an SDR:
            </p>
            <ol className="list-decimal space-y-1 pl-5 text-ink">
              <li>Tune to the coordinated UHF amateur satellite band (435–438 MHz requested)</li>
              <li>Demodulate GFSK at 9600 baud</li>
              <li>Decode AX.25 UI frames</li>
              <li>Upload observations to SatNOGS where applicable</li>
            </ol>
          </Reveal>

          <Reveal y={12}>
            <h2 id="satnogs">SatNOGS</h2>
            <p>
              {MISSION.codename} is designed for open telemetry distribution. IARU
              coordination is intended to align the downlink with the SatNOGS global
              receiver network so students and researchers can access science packets without
              proprietary decoders.
            </p>
          </Reveal>

          <Reveal y={12}>
            <h2 id="data">Data format</h2>
            <p>
              The flight computer logs microsecond-resolution pulse timestamps in lightweight
              binary text files. These logs are intended for cross-reference with other
              observatories (for example LIGO-Virgo-KAGRA gravitational-wave alerts) to
              search for coincident gamma-ray events during multi-messenger studies.
            </p>
          </Reveal>
        </article>
      </div>
    </>
  );
}
