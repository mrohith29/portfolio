// Generates a branded cover for MakeMeBetter AI. Run: node scripts/cover.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/makemebetter.png");

const W = 1200,
  H = 630;
const grid = Array.from({ length: Math.ceil(H / 4) }, (_, i) =>
  `<line x1="0" y1="${i * 4}" x2="${W}" y2="${i * 4}" stroke="#ffb000" stroke-opacity="0.03" stroke-width="1"/>`
).join("");

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a0a09"/>
  ${grid}
  <circle cx="64" cy="70" r="7" fill="#3a3320"/>
  <circle cx="88" cy="70" r="7" fill="#3a3320"/>
  <circle cx="112" cy="70" r="7" fill="#3a3320"/>
  <text x="150" y="76" font-family="monospace" font-size="22" fill="#8a7c58">~/work/makemebetter-ai</text>

  <text x="64" y="200" font-family="monospace" font-size="28" fill="#8a7c58">rohith@prod:<tspan fill="#6d97cf">~</tspan>$ <tspan fill="#e9dcbf">./makemebetter --serve</tspan></text>

  <text x="60" y="315" font-family="monospace" font-size="82" font-weight="bold" fill="#ffb000">MakeMeBetter AI</text>
  <text x="64" y="380" font-family="monospace" font-size="34" fill="#e9dcbf">goals · habits · tasks</text>

  <text x="64" y="460" font-family="monospace" font-size="26" fill="#8ac061">● end-to-end · deployed · operable by AI via MCP</text>

  <text x="64" y="566" font-family="monospace" font-size="24" fill="#8a7c58">FastAPI · React · PostgreSQL · MCP</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
