import './css/index.less';
import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import * as pages from './pages';
import {
  Router,
  NaviRoute,
  history,
  hashChange,
  Switch,
} from './components/navigation';
import { Provider, autoStorageSave, store } from './utils/reduxFp';

autoStorageSave('temp-loacl-key-name', ['test']);

class App extends React.PureComponent {
  componentDidMount() {
    history.push('/Home/');
    hashChange();
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <NaviRoute root exact path="/Home/*" component={pages.Home} />
            <NaviRoute exact path="/User/*" component={pages.User} />
            <NaviRoute exact path="/UserInfo/*" component={pages.UserInfo} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

registerServiceWorker();
