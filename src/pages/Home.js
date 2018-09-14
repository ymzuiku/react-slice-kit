import React from 'react';
import { Title, FullCenter } from '../styleds';
import { history } from '../components/navigation';

export default class extends React.PureComponent {
  gotoUser = () => {
    history.push('/User/');
  };
  render() {
    return (
      <FullCenter>
        <Title onClick={this.gotoUser}>Home page</Title>
      </FullCenter>
    );
  }
}
