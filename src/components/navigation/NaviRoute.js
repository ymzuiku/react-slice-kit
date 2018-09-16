import React from 'react';
import { Route, historyAddListen, historyRemoveListen, history } from './routerHistory';
import { Spring, animated } from 'react-spring';

const IProps = {
  exact: false,
  always: false,
  path: '',
  component: undefined,
  render: undefined,
  children: [],
  backgroundColor: '#fff',
  animed: true,
  root: false,
};

let NaviRoute = (v = IProps) => <View />;

NaviRoute = class extends React.PureComponent {
  static defaultProps = { ...IProps };
  listen = 0;
  state = {
    isImmediate: false,
    nowRoute: false,
    onAnime: false,
    index: this.props.root ? 1 : 0,
    isNearPage: true,
    moveAnimeA: this.props.root ? 0 : window.innerWidth,
    moveAnimeB: window.innerWidth,
  };
  componentDidMount() {
    this.listen = historyAddListen(this.onHistoryChange);
  }
  componentWillUnmount() {
    historyRemoveListen(this.listen);
  }
  onHistoryChange = h => {
    let index = 0;
    const path = this.props.path.replace('*', '');
    for (let i = 0; i < h.entries.length; i++) {
      const r = h.entries[i];
      if (r.pathname === path) {
        index = i;
      }
    }
    const isNearPage = h.index - index === 1;
    console.log(history._isBrowserAction);
    let isImmediate = history._isBrowserAction;
    if (index === h.index && !this.state.nowRoute) {
      // 新页面从右边推到中间
      this.setState({
        isNearPage,
        isImmediate,
        onAnime: true,
        nowRoute: true,
        index: 1,
        moveAnimeA: window.innerWidth * this.props.fixNumber,
        moveAnimeB: 0,
      });
    } else if (index > h.index && this.state.nowRoute) {
      // 当前页面从中间推到右边
      this.setState({
        isNearPage,
        isImmediate,
        onAnime: true,
        nowRoute: false,
        index: 0,
        moveAnimeA: 0,
        moveAnimeB: window.innerWidth,
      });
    } else if (index < h.index && this.state.nowRoute) {
      // 当前页面中间推到左边
      this.setState({
        isNearPage,
        isImmediate,
        onAnime: true,
        nowRoute: false,
        index: 0,
        moveAnimeA: 0,
        moveAnimeB: -window.innerWidth,
      });
    }
  };
  onRest = () => {
    this.setState({
      onAnime: false,
    });
  };
  render() {
    let { moveAnimeA, moveAnimeB } = this.state;
    let path = this.props.path;
    if (this.props.always || this.state.isNearPage || this.state.onAnime) {
      path = '*';
    }
    let isImmediate = this.state.isImmediate;
    if (this.props.animed === false) {
      isImmediate = true;
    }
    return (
      <Spring
        onRest={this.onRest}
        native
        immediate={isImmediate}
        config={{
          tension: 190,
          friction: 23,
          velocity: 0,
          restDisplacementThreshold: 0.002,
          restSpeedThreshold: 0.002,
        }}
        from={{
          transform: `perspective(600px) translate3d(${moveAnimeA}px,0,0)`,
        }}
        to={{
          transform: `perspective(600px) translate3d(${moveAnimeB}px,0,0)`,
        }}
      >
        {sp => (
          <animated.div
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              backgroundColor: this.props.backgroundColor,
              zIndex: this.state.index * 10,
              transform: sp.transform,
            }}
          >
            <Route
              exact={this.props.exact}
              path={path}
              component={this.props.component}
              render={this.props.render}
              children={this.props.children}
            />
          </animated.div>
        )}
      </Spring>
    );
  }
};

export default NaviRoute;
