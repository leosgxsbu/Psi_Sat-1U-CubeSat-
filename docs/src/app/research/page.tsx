import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pdfPath = `${basePath}/research/PsiSAT_Physics_Proposal_PathA.pdf`;

  return (
    <>
      <PageHero
        title="Research & Physics"
        subtitle="Physics proposal and supporting materials"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Research" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <article className="prose-page">
          <h2 id="physics-proposal">Physics proposal</h2>
          <p>
            The current physics proposal is available below. If your browser does not
            display embedded PDFs, use the download link.
          </p>

          <div className="not-prose mt-4">
            <div className="border border-line bg-white">
              <object
                data={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                width="100%"
                style={{ height: "75vh" }}
              >
                <p className="p-4 text-sm text-muted">
                  PDF preview unavailable on this device.{" "}
                  <a className="text-link" href={pdfPath} download>
                    Download PsiSAT_Physics_Proposal_PathA.pdf
                  </a>
                </p>
              </object>
            </div>
            <p className="mt-3 text-sm">
              <a className="text-link" href={pdfPath} download>
                Download PDF
              </a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

