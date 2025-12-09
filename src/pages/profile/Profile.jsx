import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { MovieCard } from "../../components/movie card/Movie_card";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordEditable, setPasswordEditable] = useState(false);
  const [password, setPassword] = useState("MyPassword");

  useEffect(() => {
    fetch("https://localhost:7236/api/movies/list").then((res) => res.json()).then((json) => {
      setMovies(json);
    }).catch((err) => {
      console.warn(err);
      alert("Ошибка получения данных...");
    })
  }, [])

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const togglePasswordEditable = () => {
    setPasswordEditable((prevEditable) => !prevEditable);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);// Здесь обработаю изменение пароля и отправлю на сервер
  };

  return (
    <>
      <Header />
      <div className="container">
        <main className={styles["profile-main"]}>
          <div className={styles["profile-info"]}>
            <div className={styles["profile-photo"]}>
              <img src="./assets/icon/D.jpg" alt="" />
            </div>
            <div className={styles["profile-details"]}>
              <p className={styles["my-profile"]}>Профиль</p>
              <div className={styles["profile-blocks"]}>
                <div className={styles["info-block"]}>
                  <p className={styles["name"]}>Клинцев Даниил</p>
                  <p className={styles["login"]}>Логин: KlinAdmin</p>
                  <p className={styles["e-mail"]}>klintcevd@mail.ru</p>
                  <p className={styles["birthday"]}>08.11.2001</p>
                  <button className={styles["btn-edit"]}>Редактировать</button>
                </div>

                <div className={styles["v-line"]}></div>

                <div className={styles["profile-block"]}>
                  <button className={styles["btn-password"]}>Добавить контент</button>
                </div>

                <div className={styles["v-line"]}></div>

                <div className={styles["info-block"]}>
                  <div className={styles["password-container"]}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      className={styles["password"]}
                      value={password}
                      readOnly={!passwordEditable}
                      onChange={handlePasswordChange}
                    />
                    <span className={styles["toggle-password"]} onClick={togglePasswordVisibility}>
                      {passwordVisible ? "😀" : "😌"}
                    </span>
                  </div>
                  <button className={styles["btn-password"]} onClick={togglePasswordEditable}>
                    {passwordEditable ? "Сохранить пароль" : "Сменить пароль"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["profile-favourites"]}>
            <p className={styles["slider-favourites"]}>Избранное</p>
            <div className={styles["slider-line"]}>
              <ul className={styles["list"]}>
                {movies
                  .filter((obj) => obj.year > 2005)
                  .map((obj) => (
                    <li key={obj.id}>
                      <MovieCard {...obj} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>

  );
};

export default Profile;
