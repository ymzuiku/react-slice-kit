import React from 'react';
import history from 'history/createHashHistory';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="login-bg">
        <button className='login-btn'>User page</button>
        <button className='login-btn' onClick={history().goBack}>GoBack</button>
      </div>
    );
  }
}
