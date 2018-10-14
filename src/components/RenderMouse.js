import React from 'react';

// RenderProps风格 使用 Render开头命名文件
export default class extends React.PureComponent {
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
