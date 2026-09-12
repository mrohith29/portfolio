/**
 * Reads the intrinsic size of an image in `public/` at build time.
 *
 * Cover images live in `public/` (that's what Pages CMS writes to), so Astro's
 * `<Image>` pipeline can't measure them. Without width/height the browser has
 * no aspect ratio to reserve and every hero image shifts the page as it loads.
 * Parsing the header bytes is enough — we only need the dimensions.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export interface ImageSize {
  width: number;
  height: number;
}

const cache = new Map<string, ImageSize | null>();

function png(b: Buffer): ImageSize | null {
  if (b.length < 24 || b.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function jpeg(b: Buffer): ImageSize | null {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let o = 2;
  while (o + 9 < b.length) {
    if (b[o] !== 0xff) {
      o++;
      continue;
    }
    const marker = b[o + 1];
    // SOF0-SOF15, minus DHT (c4), JPG (c8) and DAC (cc)
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: b.readUInt16BE(o + 5), width: b.readUInt16BE(o + 7) };
    }
    o += 2 + b.readUInt16BE(o + 2);
  }
  return null;
}

function webp(b: Buffer): ImageSize | null {
  if (b.length < 30 || b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP")
    return null;
  const chunk = b.toString("ascii", 12, 16);
  if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  if (chunk === "VP8L") {
    const bits = b.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === "VP8X")
    return { width: (b.readUIntLE(24, 3) & 0xffffff) + 1, height: (b.readUIntLE(27, 3) & 0xffffff) + 1 };
  return null;
}

/**
 * @param url a site-root path such as `/policy-chat-ai.png`. Remote URLs and
 *            anything we can't parse return `null` so callers just omit the attrs.
 */
export function imageSize(url: string | undefined): ImageSize | null {
  if (!url || !url.startsWith("/")) return null;
  if (cache.has(url)) return cache.get(url)!;

  let size: ImageSize | null = null;
  try {
    const path = fileURLToPath(new URL(`../../public${url.split("?")[0]}`, import.meta.url));
    const buf = readFileSync(path);
    size = png(buf) ?? jpeg(buf) ?? webp(buf);
  } catch {
    size = null;
  }

  cache.set(url, size);
  return size;
}
