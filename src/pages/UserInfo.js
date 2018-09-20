import React from 'react';
import { history } from '../components/navigation';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="col vh100">
        <button className="button" onClick={history.goBack}>
          User Info page
        </button>
      </div>
    );
  }
}
