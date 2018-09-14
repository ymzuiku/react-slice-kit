import { loadable } from '../fp';
import { Loading } from '../components';

const App = loadable(Loading, true, () => import('./App'));
const Home = loadable(Loading, true, () => import('./Home'));
const User = loadable(Loading, false, () => import('./User'));
const UserInfo = loadable(Loading, false, () => import('./UserInfo'));

export { App, Home, User, UserInfo };
