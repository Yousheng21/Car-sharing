import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
// eslint-disable-next-line import/extensions
import Home from "./Home/Home.jsx";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Switch>
        <Route path="/car-sharing" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
