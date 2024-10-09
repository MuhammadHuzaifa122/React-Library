import React from "./react.js";
import { render } from "./ReactDom";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "green" }}>App</h1>
    </div>
  );
}
render(<App />, document.getElementById("root"));
