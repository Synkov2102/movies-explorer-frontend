import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Menu from "../Menu/Menu";
import "./SavedMovies.css";

import wordsPath from "../../images/33 words.png";
import hundredYearsPath from "../../images/hundred-years.png";
import banksyPath from "../../images/banksy.png";
import { useState } from "react";

function SavedMovies() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
      <main>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard
            image={wordsPath}
            title={"33 слова о дизайне"}
            timing={"1ч 47м"}
          />
          <MoviesCard
            image={hundredYearsPath}
            title={"Киноальманах «100 лет дизайна»"}
            timing={"1ч 3м"}
          />
          <MoviesCard
            image={banksyPath}
            title={"В погоне за Бенкси"}
            timing={"1ч 42м"}
          />
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
