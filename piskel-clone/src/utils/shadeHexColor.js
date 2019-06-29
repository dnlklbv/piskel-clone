export default function shadeHexColor(color, ratio) {
  const rgb = [];
  rgb[0] = color.substring(1, 3);
  rgb[1] = color.substring(3, 5);
  rgb[2] = color.substring(5, 7);

  const amount = parseInt((255 * ratio) / 100, 10);

  rgb.forEach((val, i) => {
    const cc = parseInt(val, 16) + amount;
    let c;
    if (amount >= 0) {
      c = (cc > 255) ? 255 : (cc);
    } else {
      c = (cc < 0) ? 0 : (cc);
    }

    c = (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`;
    rgb[i] = c;
  });

  return `#${rgb.join('')}`;
}
