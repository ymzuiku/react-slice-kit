import React from 'react';
import history from 'history/createHashHistory';
import * as gs from './globalStyles';

export default class extends React.PureComponent {
  render() {
    return (
      <div style={sheet.bg}>
        <button >User page</button>
        <button style={sheet.button} onClick={history().goBack}>
          GoBack
        </button>
      </div>
    );
  }
}

const sheet = {
  bg: {
    ...gs.col,
    ...gs.center,
    width: '100%',
  },
  button: {
    margin: gs.a1,
    borderRadius: gs.a1,
    color: gs.white,
    background: gs.mainColor,
  }
};
