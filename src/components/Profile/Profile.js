import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [userName, setUserName] = useState("Евгений");
  const [userEmail, setUserEmail] = useState("synkov2102@yandex.ru");
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const name = 'Евгений'

  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened}/>
      <section className="profile">
        <form className="profile__form">
          <h1 className="profile__welcome">{`Привет, ${name}!`}</h1>
          <label className="profile__input-label">
            Имя <input id="name" className="profile__input" type="text" value={userName} onFocus={e=>{e.target.value = e.target.value}} onChange={e=>setUserName(e.target.value)} />
          </label>

          <label className="profile__input-label">
            E-mail <input id="email" className="profile__input" type="text" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
          </label>
          <button id='profileSubmit' className="profile__button" type="submit">Редактировать</button>
          <button id='profileExit' className="profile__button">Выйти из аккаунта</button>
        </form>
      </section>
      <Menu  isOpened={isMenuOpened} setIsOpened={setIsMenuOpened}/>
    </>
  );
}

export default Profile;
