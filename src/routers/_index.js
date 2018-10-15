import './index.scss';
import loadable from '../utils/loadable';
import Loading from '../components/Loading';

loadable.setDefaultLoadingComponent(Loading);

const Home = loadable.load(() => import('./Home'));
const Login = loadable.load(() => import('./Login'));

export default function(store) {
  // use store do someting
  return [
    { path: '/', redirect: '/home/' },
    { path: '/home/*', component: Home },
    { path: '/login/*', component: Login },
  ];
}
