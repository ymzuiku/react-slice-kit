import './css/index.less';
import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import * as pages from './pages';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import history from 'history/createHashHistory';
import { Provider, autoStorageSave, store } from './utils/reduxFp';

autoStorageSave('temp-loacl-key-name', ['test']);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/Home/" />} />
            <Route exact path="/Home/*" component={pages.Home} />
            <Route exact path="/User/*" component={pages.User} />
            <Route exact path="/UserInfo/*" component={pages.UserInfo} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

registerServiceWorker();
