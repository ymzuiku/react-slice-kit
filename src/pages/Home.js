import React from 'react';
import history from 'history/createHashHistory';
import { connect } from '../utils/reduxFp';
import * as actions from '../actions';

class Home extends React.PureComponent {
  gotoUser = () => {
    history().push('/User/');
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
      <div className="col center vh100">
        <button className="btn" onClick={this.gotoUser}>
          Home page {this.props.num}
        </button>
        <div onClick={this.addNum}>add num</div>
        <div onClick={this.lessenNum}>lessen num</div>
      </div>
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
