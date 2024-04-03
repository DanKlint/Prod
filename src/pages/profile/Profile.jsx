import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { MovieCard } from "../../components/movie card/Movie_card";

const Profile = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/movies").then((res) => res.json()).then((json) => {
      setMovies(json);
    }).catch((err) => {
      console.warn(err);
      alert("Ошибка получения данных...");
    })
  }, [])

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
              <p className={styles["name"]}>Клинцев Даниил</p>
              <p className={styles["login"]}>Логин</p>
              <p className={styles["e-mail"]}>klintcevd@mail.ru</p>
              <p className={styles["birthday"]}>08.11.2001</p>
              {/*ПОЛЬЗОВАТЕЛЬ: логин, пароль, имейл, имя, фамиллия, дата рождения */}
              <button className={styles["btn-edit"]}>Редактировать</button>
              <button className={styles["btn-password"]}>Сменить пароль</button>
            </div>
          </div>
          <div className={styles["profile-favourites"]}>
            {/* <div className={styles["fantasy"]}> */}
            <p className={styles["slider-favourites"]}>Избранное</p>
            <div className={styles["slider-line"]}>
              <ul className={styles["list"]}>
                {movies
                  .filter((obj) => obj.year > 2010)
                  .map((obj) => (
                    <li key={obj.id}>
                      <MovieCard {...obj} />
                    </li>
                  ))}
              </ul>
            </div>
            {/* </div> */}
          </div>
        </main>
      </div>
      <Footer />
    </>

  );
};

export default Profile;
