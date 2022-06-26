import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Profile.css";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Notification from "../Notification/Notification";
import React from "react";

function Profile({ onUpdate, setLoggedIn, notification, setNotification }) {
  const currentUser = useContext(CurrentUserContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  React.useEffect(() => {
    if (currentUser != undefined) {
      setUserName(currentUser.name);
      setUserEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(userName, userEmail);
  }

  function handleExit() {
    setLoggedIn(false)
    localStorage.clear()
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
              value={userName || ""}
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
              value={userEmail || ""}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <button
            id="profileSubmit"
            disabled={
              userName === currentUser.name && userEmail === currentUser.email
            }
            className="profile__button"
            type="submit"
          >
            Редактировать
          </button>
          <button type='button' id="profileExit" className="profile__button" onClick={handleExit}>
            Выйти из аккаунта
          </button>
        </form>
      </main>
      <Notification notification={notification} setNotification={setNotification} />
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
    </>
  );
}

export default Profile;
