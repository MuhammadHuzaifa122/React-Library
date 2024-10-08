import React from "./react";
import { render } from "./ReactDom";

// const div = (
//   <div className="container" id="app" title="hello">
//     Hello world
//   </div>
// );

function Card(props) {
  console.log(props);

  return (
    <div className="container" id="app" title="hello">
      Hello world
    </div>
  );
}

render(<Card name={"Ali"} />, document.querySelector("#root"));
