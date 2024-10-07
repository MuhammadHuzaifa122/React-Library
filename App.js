import React from "./react";

function render(reactElement, rootElement) {
  const { type, props } = reactElement;
  function createDomElement(reactElement) {
    const DomElement = document.createElement(type);
    props.children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        DomElement.append(textNode);
      } else {
        DomElement.append(createDomElement(child));
      }
    });
    return DomElement;
  }
  const DomElement = createDomElement(reactElement);
  rootElement.append(DomElement);
}
const h1 = <h1>Hello world</h1>;

render(h1, document.querySelector("#root"));
