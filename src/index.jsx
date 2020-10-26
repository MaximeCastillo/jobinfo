import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Job from './pages/Job';
import Skill from './pages/Skill';

const App = () => {
  const pages = [
    { url: "/", name: "Home" },
    { url: "/job", name: "Job" },
    { url: "/skill", name: "Skill" }
  ];

  return (
    <Router>
      <div>
        <Navbar pages={pages} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/job">
            <Job />
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));