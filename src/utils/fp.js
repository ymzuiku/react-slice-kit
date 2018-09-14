export function vm(self, key, value) {
  self.setState({
    [key]: value,
  });
}

export const springConfig = {
  tension: 190,
  friction: 23,
  velocity: 0,
  restDisplacementThreshold: 0.002,
  restSpeedThreshold: 0.002,
};
