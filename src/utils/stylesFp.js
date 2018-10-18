// default global style
const styleSheetCache = {};
export const cacheSheet = function(key, newStyle) {
  if (!styleSheetCache[key]) {
    styleSheetCache[key] = newStyle();
  }
  return styleSheetCache[key];
};

export const flex = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

export const flexSpace = {
  display: 'flex',
  flex: 1,
};

export const col = {
  ...flex,
  flexDirection: 'column',
};

export const row = {
  ...flex,
  flexDirection: row,
};

export const center = {
  ...flex,
  justifyContent: 'center',
  alignItems: 'center',
};

export const full = {
  display: 'block',
  position: 'relative',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
};
export const transparent = 'rgba(0,0,0,0)';

export const gpu = {
  transform: 'translate3d(0, 0, 0)',
  WebkitTransform: 'translate3d(0, 0, 0)',
};

export function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    args[i] = args[i].replace('%', '');
    args[i] = args[i].replace('px', '');
    args[i] = args[i].replace('em', '');
    args[i] = args[i].replace('rem', '');
    args[i] = args[i].replace('deg', '');
    sum += Number(args[i]);
  }
  return sum;
}

export function linearGradientFn(deg, color1, color2) {
  return `linear-gradient(${deg}deg,${color1},${color2})`;
}

export function borderFn(width, color, style = 'solid') {
  return `${width} ${style} ${color}`;
}
