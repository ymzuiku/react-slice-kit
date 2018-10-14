import React from 'react';

// HOC风格 使用 with 开头命名
// 不要隐藏方法名，更好排查bug
export default function withMouse(Wrapper) {
  return class extends React.PureComponent {
    state = {
      isMouseIn: false,
    };
    handleMouseIn = () => {
      this.setState({
        isMouseIn: true,
      });
    };
    handleMouseOut = () => {
      this.setState({
        isMouseIn: false,
      });
    };
    render() {
      return (
        <div
          onMouseEnter={this.handleMouseIn}
          onMouseLeave={this.handleMouseOut}
          onMouseOut={this.handleMouseOut}
        >
          <Wrapper {...this.props} isMouseIn={this.state.isMouseIn} />
        </div>
      );
    }
  };
}
