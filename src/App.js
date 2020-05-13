import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout"
import Form from "./components/form/Form";

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
