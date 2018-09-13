export function vm(self, key, value) {
  self.setState({
    [key]: value,
  });
}
