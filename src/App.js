import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
