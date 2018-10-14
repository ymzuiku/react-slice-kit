import React from 'react';

// RenderProps风格 使用 Render开头命名
// 不要隐藏类名，更好排查bug
export default class RenderMouse extends React.PureComponent {
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
        {this.props.children(this.state)}
      </div>
    );
  }
}
