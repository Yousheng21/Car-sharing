import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Confirm from "./Confirm";
import { store } from "../../reducers";

ReactDOM.render(
  <Provider store={store}>
    <Confirm />
  </Provider>,
  document.getElementById("root")
);
