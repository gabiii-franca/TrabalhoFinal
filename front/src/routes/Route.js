import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//import Route from "./Route";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Commerce from "../pages/Commerce";

export default function Routes() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home}/>
        <Route path="/Register" component={Register} isPrivate/>
        <Route path="/Commerce" component={Commerce} isPrivate/>
    </BrowserRouter>
  );
}