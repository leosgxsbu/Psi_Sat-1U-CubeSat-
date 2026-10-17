/** Shared mission & repository constants for LEO-GRM */

import {
  GITHUB_BASE,
  GITHUB_OWNER,
  GITHUB_REPO,
  PAGES_BASE_PATH,
  PROJECT_NAME,
  PROJECT_SUBTITLE,
} from "../../site.config";

export {
  GITHUB_BASE,
  GITHUB_OWNER,
  GITHUB_REPO,
  PAGES_BASE_PATH,
  PROJECT_NAME,
  PROJECT_SUBTITLE,
};

export const MISSION = {
  codename: PROJECT_NAME,
  callsign: "LEO-GRM",
  fullName: "1U Cosmic Gamma-Ray Burst Nanosatellite Observatory",
  org: "Stony Brook University",
  department: "Department of Physics and Astronomy, Stony Brook University",
  authors: ["Jackson Boyle", "Christian Tumanda", "Muhammad Maalik"],
  addressLines: [
    "Department of Physics and Astronomy",
    "Stony Brook University",
    "Stony Brook, NY 11794-3800",
  ],
  contactEmail: "muhammad.maalik@stonybrook.edu",
  frequencyBand: "435 – 438 MHz (IARU coordination, pending)",
  frequency: "437 MHz (antenna target)",
  transceiver: "Adafruit RFM95W (433 MHz module)",
  baud: "9600 baud GFSK",
  protocol: "AX.25",
  chemistry: "LiFePO₄ (2S1P)",
  propulsion: "Passive magnetic attitude control (PMAC)",
  status: "Pre-flight design",
  deadlineLabel: "2028 CSLI call",
  envelope: "100.0 × 100.0 × 113.5 mm",
  massLimit: "1.33 kg (CSLI)",
  chassis: "Aluminum 6061-T6",
  orbit: "LEO ~420 km nominal",
} as const;

export const TIMELINE = {
  start: new Date("2026-10-14T00:00:00"),
  // Placeholder for future CSLI window; no active countdown used on site.
  deadline: new Date("2028-12-31T23:59:59"),
  totalDays: 0,
} as const;

export const GITHUB_TREE = `${GITHUB_BASE}/tree/main`;

export const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/architecture", label: "Architecture" },
  { href: "/research", label: "Research" },
  { href: "/repository", label: "Repository" },
  { href: "/ground-station", label: "Ground Station" },
  { href: "/collaborate", label: "Collaborate" },
] as const;

export type RepoFolder = {
  slug: string;
  title: string;
  summary: string;
  paths: string[];
  hrefs: string[];
};

export const REPO_FOLDERS: RepoFolder[] = [
  {
    slug: "cad",
    title: "CAD Models",
    summary: "Fusion 360 mechanical envelope, stack integration, and structural assemblies.",
    paths: ["/CAD/"],
    hrefs: [`${GITHUB_TREE}/CAD`],
  },
  {
    slug: "electrical",
    title: "Electrical Design",
    summary: "EasyEDA Pro schematics for all six PCB stages and Gerber manufacturing files.",
    paths: ["/EasyEDA Pro/", "/Gerber Files/"],
    hrefs: [`${GITHUB_TREE}/EasyEDA%20Pro`, `${GITHUB_TREE}/Gerber%20Files`],
  },
  {
    slug: "firmware",
    title: "Flight Firmware",
    summary: "STM32F411 C++ firmware — deploy silence, 5σ trigger, telemetry, antenna release.",
    paths: ["/Code/"],
    hrefs: [`${GITHUB_TREE}/Code`],
  },
  {
    slug: "compliance",
    title: "Compliance Documents",
    summary: "CSLI proposal materials, IARU request, and FCC Part 5 planning.",
    paths: ["/Proposal/", "/IARU Frequency/"],
    hrefs: [`${GITHUB_TREE}/Proposal`, `${GITHUB_TREE}/IARU%20Frequency`],
  },
  {
    slug: "physics",
    title: "Physics Analysis",
    summary: "Beer–Lambert absorption, fluence threshold, and detection yield calculations.",
    paths: ["/Physics/"],
    hrefs: [`${GITHUB_TREE}/Physics`],
  },
  {
    slug: "research",
    title: "Research Library",
    summary: "References, vendor datasheets, and supporting literature.",
    paths: ["/Research/"],
    hrefs: [`${GITHUB_TREE}/Research`],
  },
];

export const DETECTION_SPECS = [
  { label: "Energy band", value: "30 keV – 300 keV" },
  { label: "Crystal", value: "50 × 50 × 3 mm CsI(Tl)" },
  { label: "Absorption (100 keV, μ = 6.21 cm⁻¹)", value: "α ≈ 84.5%" },
  { label: "Crystal yield", value: "~54 photons/keV (~550 nm)" },
  { label: "Energy efficiency η", value: "≈ 12.15%" },
  { label: "Fluence threshold", value: "10⁻⁶ erg/cm²" },
  { label: "Software trigger", value: "Mean + 5σ rolling background" },
  { label: "Projected rate", value: "~10–20 soft GRBs/year" },
] as const;

export const PCB_STAGES = [
  {
    id: 1,
    name: "Science Payload Deck",
    hardware: [
      "50 × 50 × 3 mm CsI(Tl) scintillator, 0.1 mm ESR wrap",
      "Hamamatsu S13360-6050PE SiPM (JLC C42451657)",
      "PMAC: Nd magnet + mu-metal hysteresis rods",
      "Shielded 3-pin analog jumper off main stacking bus",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 2,
    name: "Front-End Signal Digitization",
    hardware: [
      "LTC6227HMS8 op-amp (LCSC C2924151)",
      "C-L-C π-filter on +53 V SiPM bias",
      "2–10 mV analog pulse → 3.3 V logic square wave",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 3,
    name: "Command & Data Handling",
    hardware: [
      "STM32F411RET6 @ 100 MHz (LCSC C61314)",
      "EXTI10 on PA10, 1 µs timestamp resolution",
      "45 min post-deploy RF silence (firmware)",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 4,
    name: "EPS Power Manager",
    hardware: [
      "TI BQ25713 buck-boost MPPT solar charger",
      "GaAs cells on exterior PCB facets",
      "+3.3 V and +5.0 V regulated rails",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 5,
    name: "Battery & UHF Ballast",
    hardware: [
      "2× 18650 LiFePO₄ 2S1P (Keystone 1042 clips)",
      "Adafruit RFM95W — AX.25 @ 9600 baud GFSK",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 6,
    name: "Antenna Deployment Deck",
    hardware: [
      "16.3 cm tape-measure dipole elements (437 MHz)",
      "10 Ω / 1 W burn resistor + nylon restraint line",
      "IRLML2502 MOSFET thermal release actuator",
    ],
    dims: "95.0 × 95.0 mm",
  },
] as const;
