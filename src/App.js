import axios from "axios";

// HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

// Component
// import Temp from "./components/temp";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// to avoid errors we make an object
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



function App() {
  return(
    <>
      <DefaultHOC path="/" exact component = {HomePage} />
      <MovieHOC path="/movie/:id" exact component = {MoviePage}/>
    </>
  );
}

export default App;

// temp.js->default layout-> defaultHOC-> App.js -> index.js
// inner->outer
