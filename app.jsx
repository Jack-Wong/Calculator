import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from "./calculator";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  ReactDOM.render(<Calculator/>, root);
});
