import React from 'react';
import history from 'history/createHashHistory';
import { connect } from '../utils/reduxFp';
import withMouse from '../components/withMouse';
import RenderMouse from '../components/RenderMouse';
import * as actions from '../actions';

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

const HOCMouse = withMouse(
  class extends React.PureComponent {
    render() {
      return (
        <div className="home-bg">
          HOC: {this.props.isMouseIn ? 'mouse-in' : 'mouse-out'}
        </div>
      );
    }
  },
);

class Home extends React.PureComponent {
  gotoUser = () => {
    history().push('/login/');
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
      <div className="home-bg">
        <button className="home-btn">Home Page</button>
        <HOCMouse />
        <RenderMouse>
          {renderMouse => (
            <div>
              <div className="home-bg">
                renderProps: {renderMouse.isMouseIn ? 'mouse-in' : 'mouse-out'}
              </div>
            </div>
          )}
        </RenderMouse>
        <div className="home-add-btn" onClick={this.addNum}>
          redux add num
        </div>
        <div className="home-add-btn" onClick={this.lessenNum}>
          redux lessen num
        </div>
        <div>redux.state.num: {this.props.num}</div>
        <button className="home-btn" onClick={this.gotoUser}>
          Go User Page
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
