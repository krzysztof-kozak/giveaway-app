import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Form from "./components/Form";

function App() {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/oddaj-rzeczy" component={Form} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={Logout} />
      </>
    </HashRouter>
  );
}
export default App;
