import React from "react";
import Bar from "./home/bar";
import Home from "./home/home";
import AboutMe from "./aboutMe/aboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.style.scss";

class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //     <Bar></Bar>
      //     <Home></Home>
      //     <AboutMe></AboutMe>
      // </div>
      <div className="App">
        <Bar></Bar>
        <Router>
          <Switch>
            <Route path="/" component={[Home,AboutMe]} />
            {/* <Route path="/aboutMe" component={AboutMe} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
