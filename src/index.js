import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import { Provider } from 'react-redux';
import { App } from './pages';
import store from './actions/store';

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(<Root />, document.getElementById('root'));

registerServiceWorker();
