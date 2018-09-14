import React from 'react';
import { Title, FullCenter } from '../styleds';
import { history } from '../components/navigation';

export default class Home extends React.PureComponent {
  gotoUser = () => {
    history.push('/user/');
  };
  render() {
    return (
      <FullCenter>
        <Title>Home page</Title>
      </FullCenter>
    );
  }
}
