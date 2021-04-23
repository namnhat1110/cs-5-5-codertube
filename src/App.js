import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PublicNavbar from "./components/PublicNavbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <PublicNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
