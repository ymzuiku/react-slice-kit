import React from 'react';
import history from 'history/createHashHistory';

export default function(isRedirect, redirectPath, Wrapper) {
  return class extends React.PureComponent {
    state = {
      isMouseIn: false,
    };
    constructor(props) {
      super(props);
      if (isRedirect) {
        history().push(redirectPath);
      }
    }
    render() {
      return <Wrapper {...this.props} />;
    }
  };
}
