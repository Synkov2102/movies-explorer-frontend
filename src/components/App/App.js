import Main from "../Main/Main";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Notification from "../Notification/Notification";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, useLocation, useHistory, Switch } from "react-router-dom";

import api from "../../utils/MainApi";
import movies from "../../utils/MoviesApi";
import auth from "../../utils/Auth";

import React from "react";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesData, setMoviesData] = React.useState();
  const [savedMoviesData, setSavedMoviesData] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoadingMovies, setIsLoadingMovies] = React.useState(false);
  const [isErrorMovies, setIsErrorMovies] = React.useState(false);
  const [notification, setNotification] = React.useState("");

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getProfileInfo()
        .then((data) => {
          setCurrentUser(data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSavedfilms();
    tokenCheck();
  }, []);

  function tokenCheck() {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // проверим токен
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }

  function handleLogin(email, password) {
    auth
      .getLogIn(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        const jwt = localStorage.getItem("jwt");
        auth.checkToken(jwt).then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push("/movies");
          }
        });
      })
      .catch(() => {
        setNotification('При входе что-то пошло не так')
      });
  }

  function handleRegister(email, password, name) {
    auth
      .getRegister(email, password, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setNotification('При регистрации что-то пошло не так')
      });
  }

  function handleUpdateUser(name, email) {
    api
      .patchProfileInfo(name, email)
      .then((data) => {
        setCurrentUser(data.user);
        setNotification('Данные пользователя успешно изменены')
      })
      .catch(() => {
        setNotification('Не удалось изменить данные пользователя')
      });
  }

  function handleSearchSavedMovies(keyWord, isShortFilm) {
    const movies = JSON.parse(localStorage.getItem("savedFilms"));
    setSavedMoviesData(filterMovies(movies, keyWord, isShortFilm));
  }

  function handleSearchMovies(key, isShortFilm) {
    setIsLoadingMovies(true);
    movies
      .getMovies()
      .then((data) => {
        setIsLoadingMovies(false);
        const findedFilms = filterMovies(data, key, isShortFilm);

        if (findedFilms.length != 0) {
          setMoviesData(findedFilms);
          localStorage.setItem("findedFilms", JSON.stringify(findedFilms));
          localStorage.setItem("keyWord", key);
          localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm));
        } else {
          setMoviesData([]);
        }
      })
      .catch(() => {
        setIsLoadingMovies(false);
        setIsErrorMovies(true);
      });
  }

  function getSavedfilms() {
    api
      .getMovies()
      .then((data) => {
        localStorage.setItem("savedFilms", JSON.stringify(data.movie));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieSave(movie) {
    const savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
    let isLiked = false;

    for (let item in savedMovies) {
      if (movie.nameRU === savedMovies[item].nameRU) {
        isLiked = true;
        movie.id = savedMovies[item]._id;
      }
    }

    movie.image.saved = "https://api.nomoreparties.co" + movie.image.url;
    if (!movie.country) {
      movie.country = "неизвестно";
    }
    if (!movie.director) {
      movie.director = "неизвестно";
    }
    if (!movie.duration) {
      movie.duration = 0;
    }
    if (!movie.year) {
      movie.year = 0;
    }
    if (!movie.description) {
      movie.description = "неизвестно";
    }
    if (!movie.image.saved) {
      movie.image.saved =
        "https://prosmarttv.ru/wp-content/uploads/2018/11/no-signal-message.jpg";
    }
    if (!movie.trailerLink) {
      movie.trailerLink = "https://www.youtube.com/watch?v=0zPOOFqTChw";
    }
    if (!movie.thumbnail) {
      movie.thumbnail = "https://www.youtube.com/watch?v=0zPOOFqTChw";
    }
    if (!movie.movieId) {
      movie.movieId = 0;
    }
    if (!movie.nameRU) {
      movie.nameRU = "Нет названия";
    }
    if (!movie.nameEN) {
      movie.nameEN = "No title";
    }

    if (!isLiked) {
      api
        .makeMovie(movie)
        .then(() => {
          getSavedfilms();
        })
        .catch(() => {});
    } else {
      api
        .deleteMovie(movie.id)
        .then(() => {
          getSavedfilms();
        })
        .catch(() => {});
    }
  }

  function handleDeleteMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        getSavedfilms();
      })
      .catch(() => {});
  }

  function filterMovies(arr, keyWord, isShortFilm) {
    return arr.filter((item) => {
      for (let key in item) {
        if (isShortFilm === item.duration <= 40) {
          if (typeof item[key] === "string") {
            const searchItem = item[key].toUpperCase();
            if (searchItem.indexOf(keyWord.toUpperCase()) != -1) {
              return item;
            }
          }
        }
      }
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          onSearch={handleSearchMovies}
          isLoadingMovies={isLoadingMovies}
          isErrorMovies={isErrorMovies}
          movies={moviesData}
          handleMovieSave={handleMovieSave}
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          savedMovies={savedMoviesData}
          onSearch={handleSearchSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          component={Profile}
          onUpdate={handleUpdateUser}
          notification={notification}
          setNotification={setNotification}
        />

        <ProtectedRoute
          path="/signin"
          loggedIn={!loggedIn}
          component={Login}
          onLogin={handleLogin}
          notification={notification}
          setNotification={setNotification}
        />

        <ProtectedRoute
          path="/signup"
          loggedIn={!loggedIn}
          component={Register}
          onRegister={handleRegister}
          notification={notification}
          setNotification={setNotification}
        />

        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>

        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
