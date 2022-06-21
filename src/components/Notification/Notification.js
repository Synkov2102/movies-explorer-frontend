import "./Notification.css";
import exitPath from "../../images/exit.svg";
import React from "react";
function Notification({ err, setErr }) {
  React.useEffect(() => {
    setTimeout(()=>setErr(""), 4000);
  }, [err]);

  return (
    <div className={err ? "notification notification_opened" : "notification"}>
      <button className="notification__exit" onClick={() => setErr("")}>
        <img
          className="notification__exit-icon"
          src={exitPath}
          alt="Изображение кнопки выйти"
        />
      </button>

      <h3 className="notification__message">
        Что-то пошло не так, проверьте данные и попробуйте еще раз.
      </h3>
    </div>
  );
}

export default Notification;
