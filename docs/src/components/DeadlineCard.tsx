"use client";

export function DeadlineCard() {
  return (
    <div className="border border-line bg-white p-5">
      <p className="text-sm font-medium text-ink">CSLI status</p>
      <p className="mt-1 text-sm text-muted">
        NASA&apos;s CubeSat Launch Initiative page (Oct 14, 2026) indicates the next
        solicitation is anticipated in <strong>2028</strong>. PsiSAT is targeting that
        2028 call. No active submission deadline yet.
      </p>
    </div>
  );
}
