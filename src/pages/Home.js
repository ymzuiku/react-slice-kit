import React from 'react';
import { connect } from 'redux-pillar';
import { Title, FullCenter, Button } from '../styleds';
import { history } from 'react-router-pillar';
import * as actions from '../actions';

class Home extends React.PureComponent {
  gotoUser = () => {
    history.push('/User/');
  };
  componentDidMount() {
    if (this.props.num === undefined) {
      this.props.setNum(0);
    }
  }
  addNum = () => {
    this.props.setNum(this.props.num + 1);
  };
  lessenNum = () => {
    this.props.setNum(this.props.num - 1);
  };
  render() {
    return (
      <FullCenter>
        <Title onClick={this.gotoUser}>Home page {this.props.num}</Title>
        <Button onClick={this.addNum}>add num</Button>
        <Button onClick={this.lessenNum}>lessen num</Button>
      </FullCenter>
    );
  }
}

function mapStateToProps(state) {
  return {
    num: state.getIn(['test', 'num']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNum: v => {
      dispatch(actions.setNum(v));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
