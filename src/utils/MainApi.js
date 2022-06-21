class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _getToken = () => {
    return `Bearer ${localStorage.getItem("jwt")}`;
  };

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: this._getToken(),
      },
    }).then((res) => this._getResponseData(res));
  }

  patchProfileInfo(newName, newEmail) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: this._getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        Authorization: this._getToken(),
      },
    }).then((res) => this._getResponseData(res));
  }

  makeMovie(film) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        Authorization: this._getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: film.image.saved,
        trailerLink: film.trailerLink,
        thumbnail: film.thumbnail,
        movieId: film.movieId,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: this._getToken(),
      },
    }).then((res) => this._getResponseData(res));
  }
}
const baseUrl =
  "https://api.synkov.students.nomoreparties.sbs" || "http://localhost:3000";
const api = new Api({
  baseUrl: baseUrl,
});

export default api;
