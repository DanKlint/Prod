import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Contacts.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contacts = () => {
  return (
    <>
      <Header />
      <div className="container">
        {/* <main className={styles["main columns"]}> */}
        <main className={`${styles.main} ${styles.columns}`}>
          <section className={styles["column"]}>
            <div className={styles["help-container"]}>
              <h2>Адрес</h2>
              <div className="line"></div>
              <div className={styles["info"]}>
                <p>
                  <strong>Компания SomeSeries</strong> является официальным
                  поставщиком фильмов в интернет пространство и зарегестрирована
                  под идентификационным номером SIREN 456 967 328 RVT Versailes
                </p>
                <p>
                  145 rus Yves ie Coz
                  <br />
                  78000 Versailes <br />
                  Russia
                </p>
                <p className={styles["text-oblique"]}>
                  Обратите внимание: Российский офис открыт только для сотрудников
                  и официальных партнеров компании. Мы не принимаем посетителей и
                  не проводим экскурсий. Присутствие посторонних на территории
                  офиса (вне холла) <u>строго запрещено</u>.
                </p>
              </div>
              <div className="line"></div>
              <div>
                <p className={styles["under-line"]}>
                  VAT Reg. No. (RU): 456 967 328
                </p>
                <p>VAT Reg. No. (EU): 456 967 328</p>
              </div>
              <div className={styles["postal_address"]}>
                <p className={styles["mini-tittle"]}>Почтовый адрес</p>
                <p>SomeSeries company</p>
                <p>Moscow</p>
                <p>Kosmodemyanskaya 36</p>
                <p>Russia</p>
              </div>
            </div>
          </section>

          <section className={styles["main-column"]}>
            <div className={styles["help-container"]}>
              <h2>Отделы для связи</h2>
              <div className="line"></div>
              <div className={styles["middle-container"]}>
                <p className={styles["mini-tittle"]}>Служба поддержки</p>
                <p>
                  Тел: <NavLink to="#">8(937)-675-45-76</NavLink>
                </p>
                <p>
                  E-mail: <NavLink to="#">SomeSeries_support@mail.ru</NavLink>
                </p>
              </div>
              <div className={styles["middle-container"]}>
                <p className={styles["mini-tittle"]}>Отдел сотрудничества</p>

                <p>
                  Тел: <NavLink to="#">8(937)-005-76-54</NavLink>
                </p>
                <p>
                  E-mail: <NavLink to="#">SomeSeries_con@mail.ru</NavLink>
                </p>
              </div>
              <div className={styles["middle-container"]}>
                <p className={styles["mini-tittle"]}>Сообщить об ошибке</p>

                <p>
                  Тел: <NavLink to="#">8(937)-065-34-00</NavLink>
                </p>
                <p>
                  E-mail: <NavLink to="#">SomeSeries_erhelp@mail.ru</NavLink>
                </p>
              </div>
            </div>
          </section>

          <section className={styles["column"]}>
            <div className={styles["help-container"]}>
              <h2>В соцсетях</h2>
              <div className="line"></div>
              <ul className={styles["social_network"]}>
                <li>
                  ВКонтакте: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  Inst: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  Telegram: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  Viber: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  WhatsApp: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  Yandex: <NavLink to="#">SomeSeries</NavLink>
                </li>
                <li>
                  Google+: <NavLink to="#">SomeSeries</NavLink>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>

  );
};

export default Contacts;
