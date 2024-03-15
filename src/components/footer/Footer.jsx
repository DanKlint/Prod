import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faTelegram,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* <div className="line"></div> */}
      {/* <div className="container"> */}
      <div className={styles["contacts-wrap"]}>
        <div className={styles["icons-wrap"]}>
          <FontAwesomeIcon
            icon={faVk}
            className={styles["icons-wrap__icon"]}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className={styles["icons-wrap__icon"]}
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className={styles["icons-wrap__icon"]}
          />
          <FontAwesomeIcon
            icon={faGithub}
            className={styles["icons-wrap__icon"]}
          />
          <FontAwesomeIcon
            icon={faTiktok}
            className={styles["icons-wrap__icon"]}
          />
        </div>
        <p className={styles["subtitle"]}>Мы всегда готовы вам помочь.</p>
        <NavLink className={styles["link"]}>Задать вопрос</NavLink>
      </div>

      <div className={styles["info"]}>
        <div>
          <span>© 2024 «Some Series». 18+</span>
        </div>
        <div>
          <span>Онлайн просмотр доступен круглосуточно</span>
        </div>
        <div>
          <span>
            ООО «Сам Сириес», адрес местонахождения: 446218, Россия, г.
            Новокуйбышевск, ул. Садовническая, д. 82, стр. 2, пом. 9А01
          </span>
        </div>
        <div>
          <span>
            Адрес для обращений пользователей:{" "}
            <NavLink>someseries@mail.ru</NavLink>
          </span>
        </div>
        <div>
          <span>
            По вопросам пишите на{" "}
            <NavLink to="#" className={styles["footer-content__link"]}>
              info@someseries.ru
            </NavLink>
          </span>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
