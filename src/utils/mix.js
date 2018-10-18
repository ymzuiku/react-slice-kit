function parseColor(str) {
  let col = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };
  if (str.search('#') === 0) {
    str = str.replace(/#/, '');
    if (str.length === 3) {
      col.r = parseInt(str[0] + str[0], 16);
      col.g = parseInt(str[1] + str[1], 16);
      col.b = parseInt(str[2] + str[2], 16);
    } else {
      col.r = parseInt(str[0] + str[1], 16);
      col.g = parseInt(str[2] + str[3], 16);
      col.b = parseInt(str[4] + str[5], 16);
    }
  } else if (str.search('rgb') === 0) {
    str = str.replace(/rgb|a\(|\)|\s+/g, '');
    const arr = str.split(',');
    col.r = Number(arr[0]);
    col.g = Number(arr[1]);
    col.b = Number(arr[2]);
    col.a = Number(arr[3]);
  }
  return col;
}

function interpolate(a, b, t) {
  return Math.floor(a + (b - a) * t);
}

function mix(from, to, point) {
  const fromCol = parseColor(from);
  const toCol = parseColor(to);
  const r = interpolate(fromCol.r, toCol.r, point);
  const g = interpolate(fromCol.g, toCol.g, point);
  const b = interpolate(fromCol.b, toCol.b, point);
  const a =
    toCol.a === 0
      ? ((fromCol.a + toCol.a) / 2) * (1 - point)
      : fromCol.a * toCol.a;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

export default mix;
