import React from 'react';
import history from 'history/createHashHistory';

export default class extends React.PureComponent {
  gotoUserInfo = () => {
    history().push('/UserInfo/');
  };
  render() {
    return (
      <div className="col center vh100">
        <button className='btn' onClick={this.gotoUserInfo}>User page</button>
        <button className='btn' onClick={history().goBack}>GoBack</button>
      </div>
    );
  }
}
