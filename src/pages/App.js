import React from 'react';
import {
  Router,
  NaviRoute,
  history,
  hashChange,
} from '../components/navigation';
import { Full } from '../styleds';
import * as pages from './index';

export default class extends React.PureComponent {
  componentDidMount() {
    history.push('/Home/');
    hashChange();
  }
  render() {
    return (
      <Router history={history}>
        <Full>
          <NaviRoute root exact path="/Home/*" component={pages.Home} />
          <NaviRoute exact path="/User/*" component={pages.User} />
          <NaviRoute exact path="/UserInfo/*" component={pages.UserInfo} />
        </Full>
      </Router>
    );
  }
}
