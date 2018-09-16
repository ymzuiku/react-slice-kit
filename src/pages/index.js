import loadable from '../utils/loadable';
import { Loading } from '../components';

const App = loadable(Loading, () => import('./App'));
const Home = loadable(Loading, () => import('./Home'));
const User = loadable(Loading, () => import('./User'));
const UserInfo = loadable(Loading, () => import('./UserInfo'));

export { App, Home, User, UserInfo };
