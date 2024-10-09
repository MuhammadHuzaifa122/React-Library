export function render(reactElement, rootElement) {
  function createDomElement(reactElement) {
    if (typeof reactElement.type === "function") {
      return createDomElement(reactElement.type(reactElement.props));
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDomElement(el));
    }

    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement;
    const DomElement = document.createElement(type);
    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === "style") {
          Object.entries(value).forEach((style, value) => {
            console.log(style, value);
          });
        } else {
          DomElement[key] = value;
        }
      });

      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DomElement.append(...child.map((el) => createDomElement(el)));
        } else if (typeof child === "string") {
          const textNode = document.createTextNode(child);
          DomElement.append(textNode);
        } else {
          const textNode = document.createTextNode(child);
          DomElement.append(textNode);
        }
      });
    }
    return DomElement;
  }

  const DomElement = createDomElement(reactElement);
  if (Array.isArray(DomElement)) {
    rootElement.append(...DomElement);
  } else {
    rootElement.append(DomElement);
  }
}
export default {
  render,
};
