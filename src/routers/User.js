import React from 'react';
import history from 'history/createHashHistory';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="user-bg">
        <button className='user-btn'>User page</button>
        <button className='user-btn' onClick={history().goBack}>GoBack</button>
      </div>
    );
  }
}
