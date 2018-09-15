import React from 'react';
import { Title, FullCenter } from '../styleds';
import { history } from 'react-router-pillar';

export default class extends React.PureComponent {
  gotoUserInfo = () => {
    history.push('/UserInfo/');
  };
  render() {
    return (
      <FullCenter>
        <Title onClick={this.gotoUserInfo} >User page</Title>
        <Title onClick={history.goBack} >GoBack</Title>
      </FullCenter>
    );
  }
}
