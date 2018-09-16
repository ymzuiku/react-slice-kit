import React from 'react';
import { render, hydrate } from 'react-dom';
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

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

registerServiceWorker();