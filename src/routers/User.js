import React from 'react';
import { Title, FullCenter } from '../styleds';
import { history } from '../components/navigation';

export default class User extends React.PureComponent {
  gotoUser = () => {
    history.goBack();
  };
  render() {
    return (
      <FullCenter>
        <Title>User page</Title>
      </FullCenter>
    );
  }
}
