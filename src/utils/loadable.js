import ReactLoadable from 'react-loadable';

let loading;

function setDefaultLoadingComponent(component) {
  loading = component;
}
function load(loader, isPreload, LoadingComponent) {
  const Comp = ReactLoadable({
    loader,
    loading: LoadingComponent || loading,
    delay: 250, // 小于250ms不显示loading
    timeout: 10000, // 10秒超时
  });
  if (isPreload) {
    Comp.preload();
  }
  return Comp;
}

export default {
  load,
  setDefaultLoadingComponent,
};
