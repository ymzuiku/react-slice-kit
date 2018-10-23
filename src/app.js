import React from 'react';
import { render } from 'react-dom';
import routers from './routers';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, autoStorageSave, store } from './utils/reduxFp';
import * as serviceWorker from './utils/serviceWorker';

autoStorageSave('react-slice-kit-v0.01', ['test']);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {routers.map(routerProps => {
              if (routerProps.redirect) {
                return (
                  <Route
                    key={routerProps.path}
                    exact
                    path={routerProps.path}
                    render={() => <Redirect to={routerProps.redirect} />}
                  />
                );
              }
              return <Route key={routerProps.path} exact {...routerProps} />;
            })}
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
