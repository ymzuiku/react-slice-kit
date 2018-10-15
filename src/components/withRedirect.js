import React from 'react';
import history from 'history/createHashHistory';

export default function(isJump, redirect, Wrapper) {
  return class extends React.PureComponent {
    state = {
      isMouseIn: false,
    };
    constructor(props) {
      super(props);
      if (isJump) {
        history().push(redirect);
      }
    }
    render() {
      return <Wrapper {...this.props} />;
    }
  };
}
