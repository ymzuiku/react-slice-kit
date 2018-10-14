import React from 'react';

// HOC风格 使用 with 开头命名文件
export default function (Wrapper) {
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
