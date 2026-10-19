## PsiSAT — 1U CubeSat gamma‑ray burst detector

PsiSAT is a student-built 1U CubeSat to detect cosmic gamma‑ray bursts (GRBs). The payload is a CsI(Tl) scintillator coupled to a silicon photomultiplier (SiPM). Pulses are timestamped on a microcontroller flight computer and downlinked for open analysis.

- Website: https://leosgxsbu.github.io/Psi_Sat-1U-CubeSat-/
- Research page: https://leosgxsbu.github.io/Psi_Sat-1U-CubeSat-/research

### Project status

- Designing the six‑board stack.
- Stage 3 C&DH (STM32) flight computer schematic is nearly complete.
- Next: build a low‑cost bench detector to validate the readout chain.
- Targeting NASA’s CubeSat Launch Initiative call expected in 2028.

### Repository layout

```
Psi_Sat-1U-CubeSat-/
├── CAD/                   # Mechanical models and envelope
├── Code/                  # Firmware and utilities
├── docs/                  # Project website (Next.js → GitHub Pages)
├── EasyEDA Pro/           # Schematic/PCB source (owner will upload corrected files)
├── EasyEDA Pro Uncompiled/# Legacy/uncompiled EasyEDA project files
├── Gerber Files/          # Manufacturing outputs
├── IARU Frequency/        # Frequency coordination notes
├── Materials/             # BOM and procurement
├── Physics/               # Calculations and analysis
├── Proposal/              # Mission proposals and reports
├── Research/              # References and literature
├── hardware/guides/       # Build guides and wiring docs (PDF)
└── scripts/               # Helper scripts
```

### Docs and guides

- Stage 3 — C&DH Flight Computer Guide (PDF): hardware/guides/PsiSat_Stage3_CDH_Guide.pdf
- Stage 4 — Wiring Guide (PDF): hardware/guides/PsiSat_Stage4_Wiring_Guide.pdf
- Stage 5 — Wiring Guide (PDF): hardware/guides/PsiSat_Stage5_Wiring_Guide.pdf

### Contributing

Issues and pull requests are welcome for hardware, firmware, documentation, and ground‑station support. Please do not commit EasyEDA design source; the owner will upload corrected schematics.

### License

MIT — see LICENSE.
