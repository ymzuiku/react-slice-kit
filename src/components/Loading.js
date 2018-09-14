import React from 'react';
import { FullCenter, Tip } from '../styleds';

export default class Loading extends React.PureComponent {
  render() {
    return (
      <FullCenter>
        <Tip>loading...</Tip>
      </FullCenter>
    );
  }
}
