import React from 'react';
import {
  Router,
  NaviRoute,
  history,
  hashChange,
} from '../components/navigation';
import { Home, User } from './index';

export default class App extends React.PureComponent {
  componentDidMount() {
    history.push('/home/');
    hashChange();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <NaviRoute exact path="/home/*" component={Home} />
          <NaviRoute exact path="/user/*" component={User} />
        </div>
      </Router>
    );
  }
}
