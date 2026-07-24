// Generates public/og.png — the social-share card. Run: node scripts/og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og.png");

const W = 1200,
  H = 630;

const grid = Array.from({ length: Math.ceil(H / 4) }, (_, i) =>
  `<line x1="0" y1="${i * 4}" x2="${W}" y2="${i * 4}" stroke="#ffb000" stroke-opacity="0.03" stroke-width="1"/>`
).join("");

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a0a09"/>
  ${grid}
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="#ffb000" stroke-opacity="0.18" stroke-width="2" rx="18"/>

  <!-- window dots -->
  <circle cx="64" cy="70" r="7" fill="#3a3320"/>
  <circle cx="88" cy="70" r="7" fill="#3a3320"/>
  <circle cx="112" cy="70" r="7" fill="#3a3320"/>
  <text x="150" y="76" font-family="monospace" font-size="22" fill="#8a7c58">~/rohith</text>

  <text x="64" y="210" font-family="monospace" font-size="30" fill="#8a7c58">rohith@prod:<tspan fill="#6d97cf">~</tspan>$ <tspan fill="#e9dcbf">whoami --full</tspan></text>

  <text x="60" y="330" font-family="monospace" font-size="92" font-weight="bold" fill="#ffb000">Rohith Mariyala</text>

  <text x="64" y="400" font-family="monospace" font-size="40" fill="#e9dcbf">Backend &amp; Agentic-AI Engineer</text>

  <text x="64" y="470" font-family="monospace" font-size="25" fill="#8ac061">● Associate Backend Developer @ Techolution · open to opportunities</text>

  <!-- footer -->
  <text x="64" y="566" font-family="monospace" font-size="28" fill="#ffb000">rohithmariyala.com</text>
  <text x="${W - 64}" y="566" text-anchor="end" font-family="monospace" font-size="24" fill="#8a7c58">FastAPI · AsyncIO · Agents · Cloud</text>
  <rect x="1040" y="290" width="26" height="70" fill="#ffb000" fill-opacity="0.9"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
