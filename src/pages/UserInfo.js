import React from 'react';
import { Title, FullCenter } from '../styleds';
import { history } from '../components/navigation';

export default class extends React.PureComponent {
  render() {
    return (
      <FullCenter>
        <Title onClick={history.goBack}>User Info page</Title>
      </FullCenter>
    );
  }
}
