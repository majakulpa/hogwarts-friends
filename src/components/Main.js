import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../containers/App";
import HouseMain from "../containers/HouseMain";
import SpellsMain from "../containers/SpellsMain";
import MainPage from "./MainPage";

function Main() {
  return (
    <Router>
      <div className="menu">
        <nav className="f6 fw6 ttu tracked bg-black-90 ph3 pv3 pv3-ns ph3-m ph4-l w-100 navbar ">
          <ul>
            <li className="dim white mr3 dib">
              <Link className="link white" to="/">
                Home
              </Link>
            </li>
            <li className="dim white mr3 dib">
              <Link className="link white" to="/characters/">
                Characters
              </Link>
            </li>
            <li className="dim white mr3 dib">
              <Link className="link white" to="/houses/">
                Houses
              </Link>
            </li>
            <li className="dim white mr3 dib">
              <Link className="link white" to="/spells/">
                Spells
              </Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={MainPage} />
        <Route path="/characters/" component={App} />
        <Route path="/houses/" component={HouseMain} />
        <Route path="/spells/" component={SpellsMain} />
      </div>
    </Router>
  );
}

export default Main;
