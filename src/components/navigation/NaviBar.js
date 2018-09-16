import React from 'react';
import { history } from './routerHistory';
import isIPhoneX from './isIphoneX';

const barHeight = 50;
const statusBarHeight = window.plan === 'web' ? 0 : isIPhoneX ? 42 : 20;

function goBack() {
  history.goBack();
}

const IProps = {
  style: {},
  leftTitle: '',
  title: '',
  middleButton: () => {},
  leftButton: () => {},
  rightButton: () => {},
  isIPhoneX: false,
  root: false,
  children: [],
};

let NaviBar = (v = IProps) => <div />;

NaviBar = class extends React.PureComponent {
  historyAddListenID = 0;
  static defaultProps = {
    leftTitle: '< goback',
    title: 'home',
    middleButton: str => {
      return <div>{str}</div>;
    },
    leftButton: str => {
      return (
        <div onClick={goBack} style={ssc.leftButton}>
          {str}
        </div>
      );
    },
    rightButton: () => null,
  };
  render() {
    return (
      <View style={[ssc.container, this.props.style]}>
        {!this.props.root && this.props.leftButton(this.props.leftTitle)}
        {this.props.middleButton(this.props.title)}
        {this.props.rightButton()}
      </View>
    );
  }
};

const ssc = {
  container: {
    flexDirection: 'row',
    flex: 1,
    maxHeight: barHeight + statusBarHeight,
    minHeight: barHeight + statusBarHeight,
    padding: 16,
    paddingTop: 16 + statusBarHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    position: 'absolute',
    maxHeight: barHeight,
    minHeight: barHeight,
    left: 16,
    top: statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    position: 'absolute',
    maxHeight: barHeight,
    minHeight: barHeight,
    right: 16,
    top: statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default NaviBar;
