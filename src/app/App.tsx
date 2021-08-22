import * as React from "react";
import * as ReactDOM from "react-dom";

import Grid from "./Grid";

import "../public/main.css";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <h1>Which Tech Test</h1>
      <Grid />
    </>
  );
};

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
