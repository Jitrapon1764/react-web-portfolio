import React, {  Fragment } from "react";
import Bar from "./home/bar";
import Home from "./home/home";
import "./app.style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";

function App() {
  const HeaderWithRouter = withRouter(Bar);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Bar></Bar>
    //     <Home></Home>
    //   </header>
    // </div>
    <div className="App">
      <Router>
        <Fragment>
          <HeaderWithRouter />
          <Route path="/" exact component={Home} />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
