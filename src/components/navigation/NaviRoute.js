import React from 'react';
import { Route, historyAddListen, historyRemoveListen } from './routerHistory';
import { Spring } from 'react-spring';

const IProps = {
  fixNumber: 1,
  exact: false,
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
    nowRoute: false,
    index: this.props.root ? 1 : 0,
    staticAnime: this.props.root ? 0 : window.innerWidth,
    isAnime: false,
    moveAnimeA: this.props.root ? 0 : window.innerWidth,
    moveAnimeB: !this.props.root ? 0 : window.innerWidth,
  };
  componentDidMount() {
    const path = this.props.path.replace('*', '');
    this.listen = historyAddListen(h => {
      let index = 0;
      for (let i = 0; i < h.entries.length; i++) {
        const r = h.entries[i];
        if (r.pathname === path) {
          index = i;
        }
      }
      if (index === h.index && !this.state.nowRoute) {
        // 新页面从右边推到中间
        this.setState({
          nowRoute: true,
          index: 1,
          moveAnimeA: window.innerWidth * this.props.fixNumber,
          moveAnimeB: 0,
        });
      } else if (index > h.index && this.state.nowRoute) {
        // 当前页面从中间推到右边
        this.setState({
          nowRoute: false,
          index: 0,
          moveAnimeA: 0,
          moveAnimeB: window.innerWidth * this.props.fixNumber,
        });
      } else if (index < h.index && this.state.nowRoute) {
        // 当前页面从左边回到中间
        this.setState({
          nowRoute: false,
          index: 0,
          moveAnimeA: -window.innerWidth * this.props.fixNumber,
          moveAnimeB: 0,
        });
      }
    });
  }
  componentWillUnmount() {
    historyRemoveListen(this.listen);
  }
  onRest = () => {
    this.setState({
      staticAnime: this.moveAnimeB / this.props.fixNumber,
      isAnime: false,
    });
  };
  render() {
    const moveX = this.props.animed
      ? this.state.moveAnime
      : this.state.staticAnime;
    return (
      <Spring
        onRest={this.onRest}
        config={{ tension: 170, friction: 8, velocity: 0 }}
        native={!this.props.animed}
        from={{
          transform: `perspective(600px) translate3d(${
            this.state.moveAnimeA
          }px,0,0)`,
        }}
        to={{
          transform: `perspective(600px) translate3d(${
            this.state.moveAnimeB
          }px,0,0)`,
        }}
      >
        {sp => (
          <div
            style={[
              sp,
              {
                flex: 1,
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: this.props.backgroundColor,
                zIndex: this.state.index * 10,
              },
            ]}
          >
            <Route
              exact={this.props.exact}
              path={this.state.isAnime ? '*' : this.props.path}
              component={this.props.component}
              render={this.props.render}
              children={this.props.children}
            />
          </div>
        )}
      </Spring>
    );
  }
};

export default NaviRoute;
