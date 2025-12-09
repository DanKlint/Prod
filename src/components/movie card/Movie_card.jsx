import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie_card.module.css";

const MovieCardImpl = ({ id, filmName, year, runtime, genres, director, actors, plot, previewImageUrl }) => {
  return (
    <NavLink to={`/movie/${id}`}>
      <div className={styles["card-wrap"]}>
        <div className={styles["card-wrap__img"]}>
          <img src={previewImageUrl} alt="постер" />
        </div>
        <p className={styles["movie-name"]}>{filmName}</p>
      </div>
    </NavLink>
  );
};
// export default MovieCard;
export const MovieCard = memo(MovieCardImpl);
