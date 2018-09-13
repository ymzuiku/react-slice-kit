import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './routers';
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
