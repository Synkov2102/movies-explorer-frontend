class Movies {
    constructor ({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json()
    }
    

    getMovies () {
        return fetch(`${this._baseUrl}/beatfilm-movies`)
        .then(res => this._getResponseData(res))
            
    }
}
const baseUrl = 'https://api.nomoreparties.co';
const movies = new Movies({
    baseUrl: baseUrl
  }
);

export default movies;