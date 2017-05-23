import React from 'react';


const If = ({
  cond,
  inline,
  children,
  style,
  className,
  component,
}) => {
  const childrenLength = React.Children.toArray(children).length;

  if ( ! cond) {
    return null;
  }

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
