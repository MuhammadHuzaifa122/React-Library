import React from "./react";
import { render } from "./ReactDom";

// const div = (
//   <div className="container" id="app" title="hello">
//     Hello world
//   </div>
// );

function Card() {
  return (
    <div className="container" id="app" title="hello">
      Hello world
    </div>
  );
}

render(<Card />, document.querySelector("#root"));
