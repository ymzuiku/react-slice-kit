import './_index.scss';
import loadable from '../utils/loadable';
import Loading from '../components/Loading';

loadable.setDefaultLoadingComponent(Loading);

const Home = loadable.load(() => import('./Home'));
const Login = loadable.load(() => import('./Login'));

export default [
  { path: '/', redirect: '/home/' },
  { path: '/home/*', component: Home },
  { path: '/login/*', component: Login },
];
