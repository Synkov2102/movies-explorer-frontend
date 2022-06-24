import "./Notification.css";
import exitPath from "../../images/exit.svg";
import React from "react";
function Notification({ notification, setNotification }) {
  React.useEffect(() => {
    setTimeout(()=>setNotification(""), 4000);
  }, [notification]);

  return (
    <div className={notification ? "notification notification_opened" : "notification"}>
      <button className="notification__exit" onClick={() => setNotification("")}>
        <img
          className="notification__exit-icon"
          src={exitPath}
          alt="Изображение кнопки выйти"
        />
      </button>

      <h3 className="notification__message">
        {notification}
      </h3>
    </div>
  );
}

export default Notification;
