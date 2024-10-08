export function render(reactElement, rootElement) {
  function createDomElement(reactElement) {
    if (typeof reactElement.type === "function") {
      return createDomElement(reactElement.type());
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDomElement(el));
    }

    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement;
    const DomElement = document.createElement(type);
    Object.entries(props).forEach(([key, value]) => {
      DomElement[key] = value;
    });
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
  if (Array.isArray(DomElement)) {
    rootElement.append(...DomElement);
  } else {
    rootElement.append(DomElement);
  }
}
export default {
  render,
};
