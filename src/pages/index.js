import { loadable } from '../fp';
import { Loading } from '../components';

const App = loadable(Loading, () => import('./App'), true);
const Home = loadable(Loading, () => import('./Home'), true);
const User = loadable(Loading, () => import('./User'));
const UserInfo = loadable(Loading, () => import('./UserInfo'));

export { App, Home, User, UserInfo };
