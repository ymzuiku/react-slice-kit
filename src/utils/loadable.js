import Loadable from 'react-loadable';

export default function loadable(LoadingComponent, loaderFn, isPreload) {
  const Comp = Loadable({
    loader: loaderFn,
    loading: LoadingComponent,
    // 有时组件加载速度非常快（<200ms），加载过程只会在屏幕上快速闪烁, 此时如果您没有显示任何内容，用户会认为它更快
    delay: 300,
    timeout: 10000, // 10秒超时
  });
  if (isPreload) {
    Comp.preload();
  }
  return Comp;
}
