import loadable from 'react-loadable';
import { Loading } from '../components';

const App = loadable({ loader: () => import('./App'), loading: Loading });
const Home = loadable({ loader: () => import('./Home'), loading: Loading });
const User = loadable({ loader: () => import('./User'), loading: Loading });

export { App, Home, User };
