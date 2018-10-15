import './index.scss';
import loadable from '../utils/loadable';
import Loading from '../components/Loading';

loadable.setDefaultLoadingComponent(Loading);

const Home = loadable.load(() => import('./Home'));
const User = loadable.load(() => import('./User'));

export default [
  { path: '/', redirect: '/home/' },
  { path: '/home/*', component: Home },
  { path: '/user/*', component: User },
];
