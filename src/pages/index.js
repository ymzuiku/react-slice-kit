import loadable from '../utils/loadable';
import { Loading } from '../components';

const Home = loadable(Loading, () => import('./Home'));
const User = loadable(Loading, () => import('./User'));
const UserInfo = loadable(Loading, () => import('./UserInfo'));

export { Home, User, UserInfo };
