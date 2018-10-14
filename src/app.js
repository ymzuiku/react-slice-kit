import React from 'react';
import { render } from 'react-dom';
import routers from './routers';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, autoStorageSave, store } from './utils/reduxFp';
import './utils/registerServiceWorker';

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
                    exact
                    path={routerProps.path}
                    render={() => <Redirect to={routerProps.redirect} />}
                  />
                );
              }
              return <Route exact {...routerProps} />;
            })}
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
