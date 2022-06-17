import "./MoviesCard.css";
import { useHistory } from "react-router-dom";
import React from "react";

function MoviesCard({title, timing, image}) {
  let path = useHistory().location.pathname;
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    if (path === "/saved-movies") {
      setIsSaved(true)
    }
  });

  function likeClick(e){
    e.target.classList.toggle('movies-card__like-button_active')
  }

  function Button ({isSaved}) {
    if(isSaved == true){
      return (<button className="movies-card__delete-button"></button>)
    } else {
      return (<button className="movies-card__like-button" onClick={likeClick}></button>) 
    }
  }

  return (
    <div className="movies-card">
      <img className="movies-card__img" src={image} alt="Изображение на карточке"/>
      <div className="movies-card__info-wrapper">
        <h3 className="movies-card__title">{title}</h3>
        <Button isSaved = {isSaved}/>
      </div>
      <p className="movies-card__timing">{timing}</p>
    </div>
  );
}

export default MoviesCard;
