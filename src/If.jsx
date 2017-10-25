import React from 'react';


const If = ({
  cond,
  children,
  inline,
  style,
  className,
  component,
}) => {
  const childrenLength = React.Children.toArray(children).length;

  if ( ! cond) {
    return null;
  }

  if ( ! className && ! style && ! component && ! inline) {
    return children;
  }

  console.warn('Using className, style, component or inline props in If component is deprecated. In future versions, the If component would only return the children.');

  if (component) {
    return React.createElement(component, {
      style,
      className,
    });
  }

  if (childrenLength === 1) {
    return React.cloneElement(children);
  }

  if (inline) {
    return (
      <span style={style} className={className}>
        {children}
      </span>
    );
  }
  else {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }
};


export default If;
