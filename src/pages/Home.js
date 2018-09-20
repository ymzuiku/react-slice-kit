import React from 'react';
import { connect } from '../utils/reduxFp';
import { history } from '../components/navigation';
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
      <div className="col vh100">
        <div onClick={this.gotoUser}>Home page {this.props.num}</div>
        <button className='button' onClick={this.addNum}>add num</button>
        <button className='button' onClick={this.lessenNum}>lessen num</button>
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
