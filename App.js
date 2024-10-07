const React = {
  createElement(type, props, ...children) {
    const reactElement = {
      type,
      props: {
        ...props,
        children,
      },
    };
    return reactElement;
  },
};

const h1 = (
  <h1>
    <p>Hi</p>
    <b>Hello</b>
  </h1>
);

console.log(h1);
