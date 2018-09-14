import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import { App } from './pages';
import { Provider, autoStorageSave, store } from 'redux-pillar';

autoStorageSave('temp-loacl-key-name', ['test']);

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
