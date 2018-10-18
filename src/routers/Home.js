import React from 'react';
import history from 'history/createHashHistory';
import { connect } from '../utils/reduxFp';
import * as actions from '../actions';
import * as gs from './globalStyles';
import Pseudo from 'react-dom-pseudo';

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
)(
  class extends React.PureComponent {
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
      const test = {
        test: 'bb',
        fdsaf: 'cc',
      };
      return (
        <div {...test} style={sheet.bg}>
          <Pseudo style={sheet.title} hoverStyle={sheet.titleHover}>
            Home Page
          </Pseudo>
          <Pseudo>
            {(events, state) => {
              const mouseState = state.hover ? 'mouseIn' : 'mouseOut';
              return <div {...events}>{mouseState}</div>;
            }}
          </Pseudo>
          <div className="home-add-btn" onClick={this.addNum}>
            redux add num
          </div>
          <div className="home-add-btn" onClick={this.lessenNum}>
            redux lessen num
          </div>
          <div>redux.state.num: {this.props.num}</div>
          <button style={sheet.button} onClick={this.gotoUser}>
            Go User Page
          </button>
        </div>
      );
    }
  },
);

const sheet = {
  bg: {
    ...gs.col,
    ...gs.center,
    width: '100%',
  },
  title: {
    color: gs.black,
  },
  titleHover: {
    color: gs.mix(gs.black, '#f00', 0.5),
  },
  button: {
    margin: gs.a1,
    color: gs.white,
    borderRadius: gs.a1,
    background: gs.mix('#ff0000', '#ffffff88', 0.1),
  },
};
