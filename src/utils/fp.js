export function vm(self, key, value) {
  self.setState({
    [key]: value,
  });
}

export function tryfn(fn) {
  try {
    return fn();
  } catch (err) {
    return undefined;
  }
}