import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Student from "../Student/Student";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import Tech from "../Tech/Tech";
import "./Main.css";

function Main({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Tech />
        <Student />
      </main>
      <Footer />
    </>
  );
}

export default Main;
