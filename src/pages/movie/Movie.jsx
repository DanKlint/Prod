import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import VideoPlayer from '../../components/player/VideoPlayer';
import Footer from "../../components/footer/Footer";
import { MovieCard } from "../../components/movie card/Movie_card";
import styles from "./Movie.module.css";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // исправлено: useNavigate вместо useHistory

  const [movieData, setMovieData] = useState(null);
  const [comment, setComment] = useState("");
  const [movies, setMovies] = useState([]);
  const [isStarred, setIsStarred] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovieData, setEditedMovieData] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const videoUrl = '/assets/segments/parazit.m3u8';

  useEffect(() => {
    fetch(`https://localhost:7236/api/movies/${id}/details`)
      .then((res) => res.json())
      .then((json) => {
        setMovieData(json);
        setEditedMovieData(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка получения данных...");
      });
  }, [id]);

  useEffect(() => {
    fetch("https://localhost:7236/api/movies/list")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка получения данных...");
      });
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    console.log("Отправка комментария:", comment);
    setComment("");
  };

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Здесь должна быть логика сохранения на сервер
    fetch(`https://localhost:7236/api/movies/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedMovieData)
    })
      .then((res) => {
        if (res.ok) {
          setMovieData(editedMovieData);
          setIsEditing(false);
        } else {
          alert("Ошибка при сохранении изменений");
        }
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при сохранении изменений...");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    fetch(`https://localhost:7236/api/movies/${id}/delete`, {
      method: 'DELETE'
    })
      .then(() => {
        setIsDeleteModalOpen(false);
        navigate('/'); // исправлено: navigate вместо history.push
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при удалении фильма...");
      });
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditedMovieData(movieData);
    setIsEditing(false);
  };

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles["container-movie"]}>
        <main>
          <section className={styles["info-movie-section"]}>
            <div className={styles["movie-short-info"]}>
              <img src={movieData.previewImageUrl} alt="Постер фильма" />
              <div className={styles["movie-short-info-details"]}>
                {isEditing ? (
                  <ul className={styles["details-list"]}>
                    <li className={styles["details-list__item"]}>
                      <p>
                        <strong>Год:</strong>
                        <input
                          type="text"
                          name="year"
                          value={editedMovieData.year || ""}
                          onChange={handleChange}
                        />
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Жанр:</strong>
                        <input
                          type="text"
                          name="genre"
                          value={editedMovieData.genre?.name || ""}
                          onChange={(e) => {
                            const genreName = e.target.value;
                            setEditedMovieData((prevData) => ({
                              ...prevData,
                              genre: { ...prevData.genre, name: genreName },
                            }));
                          }}
                        />
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Страна:</strong>
                        <input
                          type="text"
                          name="country"
                          value={editedMovieData.country?.name || ""}
                          onChange={(e) => {
                            const countryName = e.target.value;
                            setEditedMovieData((prevData) => ({
                              ...prevData,
                              country: { ...prevData.country, name: countryName },
                            }));
                          }}
                        />
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Время продолжительности:</strong>
                        <input
                          type="text"
                          name="durationInMinutes"
                          value={editedMovieData.durationInMinutes || ""}
                          onChange={handleChange}
                        />
                      </p>
                    </li>
                  </ul>
                ) : (
                  <ul className={styles["details-list"]}>
                    <li className={styles["details-list__item"]}>
                      <p>
                        <strong>Год:</strong> {movieData.year}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Жанр:</strong> {movieData.genre?.name}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Страна:</strong> {movieData.country?.name}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Время продолжительности:</strong> {movieData.durationInMinutes} мин
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className={styles["movie-info"]}>
              <h1 className={styles["movie-title"]}>
                {isEditing ? (
                  <input
                    type="text"
                    name="filmName"
                    value={editedMovieData.filmName || ""}
                    onChange={handleChange}
                    className={styles["edit-input"]}
                  />
                ) : (
                  movieData.filmName
                )}
                <FontAwesomeIcon
                  icon={isStarred ? filledStar : regularStar}
                  className={styles["star-icon"]}
                  onClick={handleStarClick}
                />
                <FontAwesomeIcon
                  icon={faEdit}
                  className={styles["edit-icon"]}
                  onClick={handleEditClick}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className={styles["trash-icon"]}
                  onClick={handleDeleteClick}
                />
                {isEditing && (
                  <div className={styles["edit-buttons"]}>
                    <button className={styles["save-button"]} onClick={handleSaveClick}>
                      Сохранить
                    </button>
                    <button className={styles["cancel-button"]} onClick={handleCancelEdit}>
                      Отмена
                    </button>
                  </div>
                )}
              </h1>

              <div className={styles["movie-description"]}>
                {isEditing ? (
                  <textarea
                    name="description"
                    value={editedMovieData.description || ""}
                    onChange={handleChange}
                    className={styles["edit-textarea"]}
                  />
                ) : (
                  <p>{movieData.description}</p>
                )}
              </div>

              <div className={styles["profile-favourites"]}>
                <p className={styles["slider-favourites"]}>Похожие фильмы</p>
                <div className={styles["slider-line"]}>
                  <ul className={styles["list"]}>
                    {movies
                      .filter((obj) => obj.genre?.name === movieData.genre?.name && obj.id !== movieData.id)
                      .map((obj) => (
                        <li key={obj.id}>
                          <MovieCard {...obj} />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles["video-player"]}>
            <VideoPlayer videoUrl={videoUrl} />
          </section>

          <section className={styles["comments"]}>
            <div className={styles["comments_tittle"]}>
              <h2>Комментарии</h2>
            </div>
            <div className="line"></div>
            <div className={styles["comment-input"]}>
              <textarea
                placeholder="Введите ваш комментарий"
                value={comment}
                onChange={handleCommentChange}
              />
              <button className={styles["button-submit"]} onClick={handleSubmitComment}>
                Отправить
              </button>
            </div>
            <ul>
              <li>
                <div className={styles["comment"]}>
                  <span className={styles["comment__user-name"]}>KlinAdmin</span>
                  <p className={styles["comment__text"]}>
                    Гениальная социальная сатира с потрясающими актёрскими работами. "Паразиты"
                    - это кино, которое заставляет задуматься о социальных неравенствах и
                    человеческой природе.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />

      {isDeleteModalOpen && (
        <div className={styles["delete-modal"]}>
          <div className={styles["delete-modal-content"]}>
            <p className={styles['del-text']}>Вы уверены, что хотите удалить фильм?</p>
            <div className={styles["delete-modal-actions"]}>
              <button className={styles["button-submit"]} onClick={handleDeleteConfirm}>
                Удалить
              </button>
              <button className={styles["button-cancel"]} onClick={handleDeleteCancel}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;