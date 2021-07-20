import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Model from "./Order/Model/Model";
import Extra from "./Order/Extra/Extra";
import Total from "./Order/Total/Total";
import Location from "./Order/Location/Location";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/car-sharing/home" component={Home} />
        <Route exact path="/car-sharing/order" component={Location} />
        <Route path="/car-sharing/order/model" component={Model} />
        <Route path="/car-sharing/order/extra" component={Extra} />
        <Route path="/car-sharing/order/total" component={Total} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
