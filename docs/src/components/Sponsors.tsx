import React from "react";

export function Sponsors() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section aria-labelledby="sponsors-title" className="mt-14 border-t border-line pt-8">
      <article className="prose-page">
        <h2 id="sponsors-title">Sponsors</h2>
        <p>Thank you to our sponsors for supporting the PsiSAT student CubeSat project.</p>
      </article>
      <div className="mt-6">
        <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
          <li className="shrink-0">
            <a
              href="https://www.ansys.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ansys"
              className="inline-block"
            >
              <img
                src={`${basePath}/sponsors/ansys.svg`}
                alt="Ansys"
                className="h-10 w-auto sm:h-12"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

