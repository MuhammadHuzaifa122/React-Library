import React from "./react";
import { render } from "./ReactDom";

const div = (
  <div className="container" id="app" title="hello">
    Hello world
  </div>
);

const div2 = <div>Div 2</div>;
render([div, div2, "Ali"], document.querySelector("#root"));
