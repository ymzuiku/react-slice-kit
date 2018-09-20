import React from 'react';
import { history } from '../components/navigation';

export default class extends React.PureComponent {
  gotoUserInfo = () => {
    history.push('/UserInfo/');
  };
  render() {
    return (
      <div className='col vh100'>
        <div onClick={this.gotoUserInfo} >User page</div>
        <div onClick={history.goBack} >GoBack</div>
      </div>
    );
  }
}
