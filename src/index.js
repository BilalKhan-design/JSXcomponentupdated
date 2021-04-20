import React from "react";
import ReactDome from "react-dom";

import App from "./Component/App";
import * as Calculator from "./Calculator.js";

ReactDome.render(
  <ul>
    <li>Calculator.Delete()</li>
  </ul>,
  document.getElementById("root")
);
