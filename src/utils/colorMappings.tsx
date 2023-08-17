export const stringToPastelColor = (name = " ") => {
  // Generate a hash code for the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Calculate HSL values for a pastel color
  const hue = hash % 360; // Use the hash for hue
  const saturation = 40 + (Math.abs(hash) % 30); // Adjust saturation for pastel range (e.g., 40-70)
  const lightness = 70 + (Math.abs(hash) % 20); // Adjust lightness for pastel range (e.g., 70-90)

  // Convert HSL to RGB
  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;

  const rbgColor = hslToRgb(h, s, l);

  // Format the RGB values as a CSS color
  const color = `rgb(${rbgColor[0]}, ${rbgColor[1]}, ${rbgColor[2]})`;

  return color;
};

const hslToRgb = (h: any, s: any, l: any) => {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: any, q: any, t: any) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
