import Main from "../Main/Main";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/movies">
        <Movies />
      </Route>

      <Route exact path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>

      <Route path="/404">
        <NotFound />
      </Route>
    </>
  );
}

export default App;
