import React from 'react';
import history from 'history/createHashHistory';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="col center vh100">
        <button className="btn" onClick={history().goBack}>
          User Info page
        </button>
      </div>
    );
  }
}
