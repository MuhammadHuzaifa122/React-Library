import React from "./react";
import { render } from "./ReactDom";

const h1 = (
  <div className="container" id="app" title="hello">
    Hello world
  </div>
);

render(h1, document.querySelector("#root"));
