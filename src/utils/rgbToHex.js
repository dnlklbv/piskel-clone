export default function rgbToHex(r, g, b) {
  function partToHex(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  }

  const red = partToHex(r);
  const green = partToHex(g);
  const blue = partToHex(b);
  return `#${red + green + blue}`;
}
