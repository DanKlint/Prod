import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Movie.module.css";


const Movie = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3300/movies/${id}`).then((res) => res.json()).then((json) => {
      setMovieData(json);
    }).catch((err) => {
      console.warn(err);
      alert("Ошибка получения данных...");
    })
  }, [id])

  if (!movieData) {
    return <div>Loading...</div>; // или что-то подобное во время загрузки данных
  }

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <section className={styles["info-movie-section"]}>
            <div className={styles["movie-short-info"]}>
              <img src={movieData.posterUrl} alt="Постер фильма" />
              <div className={styles["movie-short-info-details"]}>
                <ul className={styles["details-list"]}>
                  <li className={styles["details-list__item"]}>
                    <p>
                      <strong>Год:</strong> {movieData.year}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Жанр:</strong> {movieData.genres.join(", ")}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Актеры:</strong> {movieData.actors}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Время продолжительности:</strong> {movieData.runtime} мин
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles["movie-info"]}>
              <h1 className={styles["movie-title"]}>{movieData.title}</h1>
              <div className={styles["movie-description"]}>
                <p>
                  {movieData.plot}
                </p>
              </div>
            </div>
          </section>
          <section className={styles["video-player"]}></section>
          <section className={styles["comments"]}>
            <div className={styles["comments_tittle"]}>
              <h2>Комментарии</h2>
            </div>
            <div className="line"></div>
            <ul>
              <li>
                <div className={styles["comment"]}>
                  <span className={styles["comment__user-name"]}>User</span>
                  <p className={styles["comment__text"]}>
                    комментарий комментарий комментарий комментарий комментарий
                  </p>
                </div>
              </li>
              <li>
                <div className={styles["comment"]}>
                  <span className={styles["comment__user-name"]}>User</span>
                  <p className={styles["comment__text"]}>
                    комментарий комментарий комментарий комментарий комментарий
                  </p>
                </div>
              </li>
              <li>
                <div className={styles["comment"]}>
                  <span className={styles["comment__user-name"]}>User</span>
                  <p className={styles["comment__text"]}>
                    комментарий комментарий комментарий комментарий комментарий
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <Footer />
    </>

  );
};

export default Movie;
