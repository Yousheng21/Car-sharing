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
        <Route exact path="/car-sharing" component={Home} />
        <Route
          exact
          path="/car-sharing/order"
          render={() => <Location page={0} nextStep={1} />}
        />
        <Route
          path="/car-sharing/order/model"
          render={() => <Model page={1} nextStep={2} />}
        />
        <Route
          path="/car-sharing/order/extra"
          render={() => <Extra page={2} nextStep={3} />}
        />
        <Route
          path="/car-sharing/order/total"
          render={() => <Total page={3} nextStep={3} />}
        />
        <Route path="/car-sharing/order/confirm/:id" component={Confirm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
