import Loadable from 'react-loadable';

export function loadable(LoadingComponent, isPreload, loaderFn) {
  const Comp = Loadable({
    loader: loaderFn,
    loading: LoadingComponent,
    // 有时组件加载速度非常快（<200ms），加载屏幕只会在屏幕上快速闪烁, 如果您没有显示任何内容，用户会认为它更快
    delay: 300,
    timeout: 10000, // 10 seconds 之后如果没获取内容, 重新刷新
  });
  if (isPreload) {
    Comp.preload();
  }
  return Comp;
}

export function vm(self, key, value) {
  self.setState({
    [key]: value,
  });
}

export const springConfig = {
  tension: 210,
  friction: 26,
  velocity: 0,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
};
