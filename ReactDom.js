export function render(reactElement, rootElement) {
  const { type, props } = reactElement;
  function createDomElement(reactElement) {
    const DomElement = document.createElement(type);
    console.log(props);
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
  rootElement.append(DomElement);
}
export default {
  render,
};
