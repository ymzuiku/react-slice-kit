import Loading from './Loading';
import Loadable from 'react-loadable';

const App = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

export { App };
