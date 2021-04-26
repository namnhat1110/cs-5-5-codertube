import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Upcoming from "./pages/Upcoming";
import PopularMovies from "./pages/PopularMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import MovieDetail from "./pages/MovieDetail";
import PublicFooter from "./components/PublicFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie" component={HomePage} />
          <Route exact path="/movie/upcoming" component={Upcoming} />
          <Route exact path="/movie/popular" component={PopularMovies} />
          <Route exact path="/movie/top_rated" component={TopRatedMovies} />
          <Route exact path="/movie/:id" component={MovieDetail} />
        </Switch>
        <PublicFooter />
      </Router>
    </div>
  );
}

export default App;
