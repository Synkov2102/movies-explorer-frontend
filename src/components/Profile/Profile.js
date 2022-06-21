import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Profile.css";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({onUpdate}) {
  const currentUser = useContext(CurrentUserContext);

  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(userName, userEmail);
  }

  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <main className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h1 className="profile__welcome">{`Привет, ${currentUser.name}!`}</h1>
          <label className="profile__input-label">
            Имя{" "}
            <input
              id="name"
              className="profile__input"
              type="text"
              value={userName}
              onFocus={(e) => {
                e.target.value = e.target.value;
              }}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>

          <label className="profile__input-label">
            E-mail{" "}
            <input
              id="email"
              className="profile__input"
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <button id="profileSubmit" className="profile__button" type="submit">
            Редактировать
          </button>
          <button id="profileExit" className="profile__button">
            Выйти из аккаунта
          </button>
        </form>
      </main>
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
    </>
  );
}

export default Profile;
