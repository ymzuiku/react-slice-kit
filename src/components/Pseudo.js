import React from 'react';

let isMobile = false;
if (typeof navigator === 'undefined') {
  isMobile = true;
} else if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  isMobile = true;
}

let IProps = {
  merge: true,
  disable: false,
  style: undefined,
  linkStyle: undefined,
  focusStyle: undefined,
  hoverStyle: undefined,
  activeStyle: undefined,
  visitedStyle: undefined,
  disableStyle: undefined,
  alwayStyle: undefined,
};

// 模拟css伪类 RenderProps风格 使用 Render开头命名文件
let Pseudo = (props = IProps) => <React.Fragment />;
Pseudo = class extends React.PureComponent {
  static defaultProps = IProps;
  state = {
    hover: false,
    focus: false,
    active: false,
    visited: false,
  };
  handleClick = () => {
    if (this.state.visited === false) {
      this.setState({
        visited: true,
      });
    }
  };
  handleMouseIn = () => {
    this.setState({
      hover: true,
    });
  };
  handleMouseOut = () => {
    this.setState({
      hover: false,
      active: false,
    });
  };
  handleMouseDown = () => {
    this.setState({
      active: true,
    });
  };
  handleMouseUp = () => {
    this.setState({
      active: false,
    });
  };
  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };
  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };
  select = (defaultStyle, hoverStyle, focusStyle) => {
    if (this.state.focus) {
      return focusStyle;
    } else if (this.state.hover) {
      return hoverStyle;
    }
    return defaultStyle;
  };
  fixStyle = () => {
    const {
      merge,
      style,
      disable,
      focusStyle,
      hoverStyle,
      activeStyle,
      visitedStyle,
      disableStyle,
      alwayStyle,
    } = this.props;
    let linkStyle = this.props.linkStyle;
    if (visitedStyle !== undefined && this.state.visited === true) {
      linkStyle = visitedStyle;
    }
    // if merge === false, remove style merge
    let mergeStyle = merge ? { ...style, ...linkStyle } : { ...linkStyle };
    // fix style
    if (disable) {
      return { ...mergeStyle, ...disableStyle, ...alwayStyle };
    }
    if (activeStyle && this.state.active) {
      return { ...mergeStyle, ...activeStyle, ...alwayStyle };
    }
    if (focusStyle && this.state.focus) {
      return { ...mergeStyle, ...focusStyle, ...alwayStyle };
    }
    if (hoverStyle && this.state.hover) {
      return { ...mergeStyle, ...hoverStyle, ...alwayStyle };
    }
    return { ...style, ...linkStyle, ...alwayStyle };
  };
  renderDiv = props => {
    const { style, ...rest } = this.props;
    return <div {...props} {...rest} />;
  };
  render() {
    let children;
    if (typeof this.props.children === 'function') {
      children = this.props.children;
    } else {
      children = this.renderDiv;
    }
    // if disable, remove mouse and touch event
    if (this.props.disable) {
      return children({
        style: this.fixStyle(),
      });
    }
    // if moblie use touch events
    if (isMobile) {
      return children({
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        style: this.fixStyle(),
        onClick: this.handleClick,
        onTouchStart: this.handleMouseDown,
        onTouchEnd: this.handleMouseUp,
        onTouchCancel: this.handleMouseOut,
      });
    }
    return children({
      onMouseEnter: this.handleMouseIn,
      onMouseLeave: this.handleMouseOut,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      style: this.fixStyle(),
      onClick: this.handleClick,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
    });
  }
};

export default Pseudo;
