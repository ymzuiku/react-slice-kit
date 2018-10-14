import './index.scss';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

function loadable(loaderFn, isPreload) {
  const Comp = Loadable({
    loader: loaderFn,
    loading: Loading,
    delay: 250, // 小于250ms不显示loading
    timeout: 10000, // 10秒超时
  });
  if (isPreload) {
    Comp.preload();
  }
  return Comp;
}

const Home = loadable(() => import('./Home'));
const User = loadable(() => import('./User'));

export default [
  { path: '/', redirect: '/home/' },
  { path: '/home/*', component: Home },
  { path: '/user/*', component: User },
];
